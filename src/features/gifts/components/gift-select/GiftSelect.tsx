import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import currency from 'currency.js';
import { ValidationResult } from 'joi';
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import {
  IGiftSelectReduxActions,
  IGiftSelectReduxProps,
} from './GiftSelectContainer';
import { GIFT_SELECT_FORM } from '../../../../core/constants/gift-form';
import ProductsForm from '../../../products/components/products-form/ProductsSelectForm';
import { FProduct, Product } from '../../../products/models/product.model';
import MainForm from './views/MainForm';
import {
  Address,
  AddressForm as AddressFormData,
  AddressFormErrors,
} from '../../../addresses/models/address.model';
import { AddressForm } from '../../../addresses/components/address-form/AddressForm';
import { ValidationsService } from '../../../../core/services/validations.service';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';
import GiftSelectSuccess from './views/GiftSelectSuccess';
import { STATUS } from '../../../../core/constants/gift-status-data';
import { AuthService } from '../../../../core/services/auth.service';

type IGiftSelectProps = IGiftSelectReduxProps & IGiftSelectReduxActions;

const GiftSelect = ({
  gift,
  products,
  giftSelect,
  getGift,
  getProducts,
  selectGift,
  clearProductsData,
  getAddresses,
  addresses,
  address,
  createAddress,
  provinces,
  localities,
  getProvinces,
  getLocalities,
  giftsReceived,
  getGiftsReceived,
  clearAddressData,
}: IGiftSelectProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { loading, isFetchCompleted, error } = gift;

  const [currentView, setCurrentView] = useState<string>(
    GIFT_SELECT_FORM.VIEWS.MAIN_FORM
  );

  type GiftSelectForm = {
    site: string;
    page: number;
    q: string;
    category: string;
    products: FProduct[];
    selectedAmount: number;
    addressId: string;
  };

  const [giftSelectFormData, setGiftSelectFormData] = useState<GiftSelectForm>({
    products: [],
    site: 'MLA',
    page: 1,
    q: '',
    category: '',
    selectedAmount: 0,
    addressId: '',
  });

  const [addressFormData, setAddressFormData] = useState<AddressFormData>({
    street: '',
    number: '',
    apt: '',
    description: '',
    postalCode: '',
    localityId: '',
    name: '',
    contactPhone: '',
    province: '',
  });

  const [addressFormErrors, setAddressFormErrors] = useState<AddressFormErrors>(
    {
      street: '',
      number: '',
      apt: '',
      description: '',
      postalCode: '',
      localityId: '',
      name: '',
      contactPhone: '',
      province: '',
    }
  );

  useEffect(() => {
    getGift(id);
    getAddresses();
    getProvinces();
  }, [getGift, id, getAddresses, getProvinces]);

  useEffect(() => {
    if (
      !address.loading &&
      address.isSaveCompleted &&
      !address.error &&
      addressFormData.street
    ) {
      setCurrentView(GIFT_SELECT_FORM.VIEWS.MAIN_FORM);
      setAddressFormData({
        street: '',
        number: '',
        apt: '',
        description: '',
        postalCode: '',
        localityId: '',
        name: '',
        contactPhone: '',
        province: '',
      });
      clearAddressData();
    }
  }, [
    setCurrentView,
    address,
    addressFormData.street,
    setAddressFormData,
    clearAddressData,
  ]);

  useEffect(() => {
    if (
      !giftSelect.loading &&
      giftSelect.isSaveCompleted &&
      !giftSelect.error
    ) {
      setCurrentView(GIFT_SELECT_FORM.VIEWS.FORM_SUCCESS);
      getGiftsReceived(giftsReceived.filters);
    }
  }, [giftSelect, setCurrentView, getGiftsReceived, giftsReceived.filters]);

  const handleView = (view: string) => {
    setCurrentView(view);
  };

  const handleFormData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    const { name, value } = e.target;
    const newState = { ...giftSelectFormData };
    const newAddressDataState = { ...addressFormData };

    if (name === 'inputSearch') newState.q = value as string;
    if (name === 'apt') newAddressDataState.apt = value as string;
    if (name === 'contactPhone')
      newAddressDataState.contactPhone = value as string;
    if (name === 'description')
      newAddressDataState.description = value as string;
    if (name === 'name') newAddressDataState.name = value as string;
    if (name === 'number') newAddressDataState.number = value as string;
    if (name === 'postalCode') newAddressDataState.postalCode = value as string;
    if (name === 'street') newAddressDataState.street = value as string;

    setAddressFormData(newAddressDataState);
    setGiftSelectFormData(newState);
  };

  const handleAutocompleteData = (name: string, value: string) => {
    const newAddressDataState = { ...addressFormData };
    if (name === 'localityId') newAddressDataState.localityId = value;
    if (name === 'province') newAddressDataState.province = value;
    setAddressFormData(newAddressDataState);
  };

  const handleCategory = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      const newState = { ...giftSelectFormData };

      newState.category = newCategory;
      setGiftSelectFormData(newState);
    }
  };

  const deleteProduct = (meliId: string) => {
    const newState = { ...giftSelectFormData };

    newState.products = giftSelectFormData.products.filter((p) => {
      if (p.meliId === meliId) {
        newState.selectedAmount = Number(
          currency(giftSelectFormData.selectedAmount).subtract(p.price)
        );
      }
      if (p.meliId !== meliId) return true;
      return false;
    });
    setGiftSelectFormData(newState);
  };

  const selectProduct = (selectedProduct: Product) => {
    const newState = { ...giftSelectFormData };

    if (
      !giftSelectFormData.products.filter(
        (p) => p.meliId === selectedProduct.id
      ).length
    ) {
      newState.products.push({
        meliId: selectedProduct.id,
        name: selectedProduct.title,
        price: selectedProduct.price,
        picture: selectedProduct.thumbnail.replace('http', 'https'),
        meliCategoryId: selectedProduct.category_id,
      });
      newState.selectedAmount = Number(
        currency(giftSelectFormData.selectedAmount).add(selectedProduct.price)
      );
    } else {
      newState.products = giftSelectFormData.products.filter((p) => {
        if (p.meliId === selectedProduct.id)
          newState.selectedAmount = Number(
            currency(giftSelectFormData.selectedAmount).subtract(p.price)
          );

        if (p.meliId !== selectedProduct.id) return true;
        return false;
      });
    }
    setGiftSelectFormData(newState);
  };

  const selectAddress = (selectedAddress: Address) => {
    const newState = { ...giftSelectFormData };
    newState.addressId = selectedAddress.id;

    setGiftSelectFormData(newState);
  };

  const selectSuggestedProduct = (selectedProduct: FProduct) => {
    const newState = { ...giftSelectFormData };

    if (
      !giftSelectFormData.products.filter(
        (p) => p.meliId === selectedProduct.meliId
      ).length
    ) {
      newState.products.push(selectedProduct);
      newState.selectedAmount = Number(
        currency(giftSelectFormData.selectedAmount).add(selectedProduct.price)
      );
    } else {
      newState.products = giftSelectFormData.products.filter((p) => {
        if (p.meliId === selectedProduct.meliId)
          newState.selectedAmount = Number(
            currency(giftSelectFormData.selectedAmount).subtract(p.price)
          );
        if (p.meliId !== selectedProduct.meliId) return true;
        return false;
      });
    }
    setGiftSelectFormData(newState);
  };

  const searchProducts = (page = 1) => {
    const searchFilters = {
      site: giftSelectFormData.site,
      maxAmount: Number(
        currency(gift.data?.productFilter.maxAmount as number).subtract(
          giftSelectFormData.selectedAmount
        )
      ),
      filters: [
        { filter: 'q', value: giftSelectFormData.q },
        { filter: 'category', value: giftSelectFormData.category },
      ],
      page,
    };
    getProducts(searchFilters);

    const newState = { ...giftSelectFormData };
    newState.page = page;
    setGiftSelectFormData(newState);
  };

  const clearProducts = () => {
    clearProductsData();
    const newState = { ...giftSelectFormData };
    newState.page = 1;
    newState.q = '';
    setGiftSelectFormData(newState);
  };

  const nextProductsPage = () => {
    searchProducts(giftSelectFormData.page + 1);
  };

  const saveAddress = () => {
    const newState = { ...addressFormErrors };

    const errors: {
      street: ValidationResult;
      number: ValidationResult;
      postalCode: ValidationResult;
      localityId: ValidationResult;
      name: ValidationResult;
      contactPhone: ValidationResult;
      province: ValidationResult;
      description: ValidationResult;
    } = ValidationsService.address(addressFormData);

    newState.street = ValidationsService.setErrorMessage(
      errors?.street?.error?.details[0]
    );

    newState.number = ValidationsService.setErrorMessage(
      errors?.number?.error?.details[0]
    );

    newState.postalCode = ValidationsService.setErrorMessage(
      errors?.postalCode?.error?.details[0]
    );

    newState.localityId = ValidationsService.setErrorMessage(
      errors?.localityId?.error?.details[0]
    );

    newState.name = ValidationsService.setErrorMessage(
      errors?.name?.error?.details[0]
    );

    newState.contactPhone = ValidationsService.setErrorMessage(
      errors?.contactPhone?.error?.details[0]
    );

    newState.province = ValidationsService.setErrorMessage(
      errors?.province?.error?.details[0]
    );

    newState.description = ValidationsService.setErrorMessage(
      errors?.description?.error?.details[0]
    );

    setAddressFormErrors(newState);

    if (
      !newState.street &&
      !newState.number &&
      !newState.postalCode &&
      !newState.localityId &&
      !newState.name &&
      !newState.contactPhone &&
      !newState.province &&
      !newState.description
    ) {
      createAddress(addressFormData);
    }
  };

  const goMainForm = () => {
    handleView(GIFT_SELECT_FORM.VIEWS.MAIN_FORM);
  };

  const handleConfirmGift = () => {
    selectGift(
      gift.data?.id as string,
      giftSelectFormData.addressId,
      giftSelectFormData.products
    );
  };

  const getView = (): JSX.Element => {
    const views: { [key: string]: JSX.Element } = {
      MAIN_FORM: (
        <MainForm
          gift={gift}
          selectProduct={selectSuggestedProduct}
          selectedProducts={giftSelectFormData.products}
          deleteProduct={deleteProduct}
          selectedAmount={giftSelectFormData.selectedAmount}
          handleView={handleView}
          handleCategory={handleCategory}
          selectedCategory={giftSelectFormData.category}
          addresses={addresses}
          handleConfirmGift={handleConfirmGift}
          selectAddress={selectAddress}
          selectedAddress={giftSelectFormData.addressId}
          isSavingGiftSelect={giftSelect.loading}
        />
      ),
      PRODUCTS_FORM: (
        <ProductsForm
          formData={{
            site: giftSelectFormData.site,
            q: giftSelectFormData.q,
            page: giftSelectFormData.page,
            products: giftSelectFormData.products,
            selectedAmount: giftSelectFormData.selectedAmount,
          }}
          storeData={{
            products,
          }}
          handleView={handleView}
          handleFormData={handleFormData}
          searchProducts={searchProducts}
          selectProduct={selectProduct}
          deleteProduct={deleteProduct}
          nextProductsPage={nextProductsPage}
          clearProducts={clearProducts}
          maxAmount={gift.data?.productFilter.maxAmount as number}
        />
      ),
      ADDRESS_FORM: (
        <AddressForm
          storeData={{
            addressForm: address,
            provinces,
            localities,
          }}
          formData={addressFormData}
          formErrors={addressFormErrors}
          handleFormData={handleFormData}
          handleCreate={saveAddress}
          goback={goMainForm}
          handleAutocompleteData={handleAutocompleteData}
          getLocalities={getLocalities}
        />
      ),
      FORM_SUCCESS: <GiftSelectSuccess gift={gift} />,
    };
    return views[currentView];
  };

  if (loading)
    return (
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} className="form--container">
            <Box py={2}>
              <Skeleton width="40%">
                <Typography variant="h3">.</Typography>
              </Skeleton>
            </Box>
            <Grid container justify="center">
              <Grid item xs={12} md={6} style={{ padding: '0 10px' }}>
                <Box py={2}>
                  <Skeleton width="50%">
                    <Typography variant="h5">.</Typography>
                  </Skeleton>
                </Box>
                <Card>
                  {[0, 1, 2].map((val) => {
                    return (
                      <Fragment key={val}>
                        <Box
                          display="flex"
                          bgcolor="white"
                          alignItems="center"
                          p={2}>
                          <Skeleton width="80%">
                            <Typography variant="h5">.</Typography>
                          </Skeleton>
                        </Box>
                        <Divider style={{ backgroundColor: '#eee' }} />
                      </Fragment>
                    );
                  })}
                </Card>
                <Box py={2}>
                  <Skeleton width="40%">
                    <Typography variant="h5">.</Typography>
                  </Skeleton>
                </Box>
                <Grid container justify="center">
                  {[0, 1, 2, 3, 4, 5].map((val) => {
                    return (
                      <Grid
                        key={val}
                        item
                        xs={12}
                        md={6}
                        style={{ padding: '0 10px' }}>
                        <Box
                          display="flex"
                          bgcolor="white"
                          alignItems="center"
                          px={2}
                          py={2}>
                          <Skeleton variant="rect" width={100} height={100} />
                          <Box p={2} width="100%">
                            <Skeleton width="90%">
                              <Typography variant="h5">.</Typography>
                            </Skeleton>
                            <Skeleton width="60%">
                              <Typography variant="h4">.</Typography>
                            </Skeleton>
                          </Box>
                        </Box>
                        <Divider style={{ backgroundColor: '#eee' }} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} style={{ padding: '0 10px' }}>
                <Box py={2}>
                  <Skeleton width="40%">
                    <Typography variant="h5">.</Typography>
                  </Skeleton>
                </Box>
                <Grid container justify="center">
                  {[0, 1, 2, 3, 4, 5].map((val) => {
                    return (
                      <Grid
                        key={val}
                        item
                        xs={12}
                        style={{ padding: '0 10px' }}>
                        <Box
                          display="flex"
                          bgcolor="white"
                          alignItems="center"
                          px={2}
                          py={2}>
                          <Skeleton variant="rect" width={100} height={100} />
                          <Box p={2} width="100%">
                            <Skeleton width="90%">
                              <Typography variant="h5">.</Typography>
                            </Skeleton>
                            <Skeleton width="60%">
                              <Typography variant="h4">.</Typography>
                            </Skeleton>
                          </Box>
                        </Box>
                        <Divider style={{ backgroundColor: '#eee' }} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );

  if (error)
    return (
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={8} className="form--container">
            <Alert severity="error">{ERROR_MESSAGES.FETCH_ERROR}</Alert>
          </Grid>
        </Grid>
      </Container>
    );

  if (
    isFetchCompleted &&
    !error &&
    !loading &&
    (gift.data?.status.id !== STATUS.ACTIVO ||
      !gift.data?.userReceiver ||
      gift.data?.userReceiver.id !== AuthService.getUserData()?.id)
  )
    return (
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={8} className="form--container">
            <Alert severity="error">{ERROR_MESSAGES.GIFT_NOT_TO_SELECT}</Alert>
          </Grid>
        </Grid>
      </Container>
    );

  return <>{getView()}</>;
};

export default GiftSelect;
