import React, { Fragment, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
import GiftPayFinished from './pay-finished/GiftPayFinished';
import GiftPreviousPay from './previous-pay/GiftPreviousPay';
import { IGiftPayReduxActions, IGiftPayReduxProps } from './GiftPayContainer';
import { GIFT_PAY_FORM } from '../../../../core/constants/gift-form';
import {
  Address,
  AddressForm as AddressFormData,
  AddressFormErrors,
} from '../../../addresses/models/address.model';
import { ValidationsService } from '../../../../core/services/validations.service';
import { AddressForm } from '../../../addresses/components/address-form/AddressForm';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';
import { STATUS } from '../../../../core/constants/gift-status-data';
import { AuthService } from '../../../../core/services/auth.service';
import { CHProduct } from '../../../products/models/product.model';

type IGiftPayProps = IGiftPayReduxActions & IGiftPayReduxProps;

const GiftPay = ({
  gift,
  addresses,
  address,
  provinces,
  localities,
  giftPaymentUrl,
  giftBuy,
  getGift,
  getAddresses,
  getProvinces,
  getLocalities,
  createAddress,
  getPaymentUrl,
  buyGift,
  clearAddressData,
}: IGiftPayProps): JSX.Element => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const payment = params.get('payment_id') || '';

  const { id } = useParams<{ id: string }>();
  const { loading, isFetchCompleted, error } = gift;

  const [currentView, setCurrentView] = useState<string>(
    GIFT_PAY_FORM.VIEWS.PREVIOUS_PAY
  );

  type GiftPayForm = {
    addressId: string;
  };

  const [giftPayFormData, setGiftPayFormData] = useState<GiftPayForm>({
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
    if (payment) setCurrentView(GIFT_PAY_FORM.VIEWS.PAY_RESULT);
  }, [setCurrentView, payment]);

  useEffect(() => {
    if (
      !address.loading &&
      address.isSaveCompleted &&
      !address.error &&
      addressFormData.street
    ) {
      setCurrentView(GIFT_PAY_FORM.VIEWS.PREVIOUS_PAY);
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
      !giftPaymentUrl.loading &&
      giftPaymentUrl.isFetchCompleted &&
      !giftPaymentUrl.error &&
      giftPaymentUrl.data
    ) {
      window.location.href = giftPaymentUrl.data;
    }
  }, [giftPaymentUrl]);

  const handleView = (view: string) => {
    setCurrentView(view);
  };

  const handleFormData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    const { name, value } = e.target;
    const newAddressDataState = { ...addressFormData };

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
  };

  const handleAutocompleteData = (name: string, value: string) => {
    const newAddressDataState = { ...addressFormData };
    if (name === 'localityId') newAddressDataState.localityId = value;
    if (name === 'province') newAddressDataState.province = value;
    setAddressFormData(newAddressDataState);
  };

  const selectAddress = (selectedAddress: Address) => {
    const newState = { ...giftPayFormData };
    newState.addressId = selectedAddress.id;

    setGiftPayFormData(newState);
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
    handleView(GIFT_PAY_FORM.VIEWS.PREVIOUS_PAY);
  };

  const goAddressForm = () => {
    handleView(GIFT_PAY_FORM.VIEWS.ADDRESS_FORM);
  };

  const handlePayGift = () => {
    if (gift.data?.productsChosen) {
      const rawProducts = gift.data?.productsChosen.products;

      const mappedProducts = rawProducts.map((product: CHProduct) => {
        return {
          meliId: product.id,
          name: product.title,
          price: product.price,
          picture: product.pictures,
          meliCategoryId: product.meliCategoryId,
        };
      });

      const deliveryAddress = giftPayFormData.addressId
        ? giftPayFormData.addressId
        : gift.data.delivery.deliveryAddress.id;

      getPaymentUrl(id, mappedProducts, deliveryAddress);
    }
  };

  const getView = (): JSX.Element => {
    const views: { [key: string]: JSX.Element } = {
      PREVIOUS_PAY: (
        <GiftPreviousPay
          gift={gift}
          goAddressForm={goAddressForm}
          addresses={addresses}
          handlePayGift={handlePayGift}
          selectAddress={selectAddress}
          selectedAddress={giftPayFormData.addressId}
          isGettingPaymentUrl={giftPaymentUrl.loading}
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
      PAY_RESULT: (
        <GiftPayFinished gift={gift} giftBuy={giftBuy} buyGift={buyGift} />
      ),
    };
    return views[currentView];
  };

  if (loading)
    return (
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} md={8} className="form--container">
            <Box py={2}>
              <Skeleton width="40%">
                <Typography variant="h3">.</Typography>
              </Skeleton>
              <Box mt={2}>
                <Card>
                  {[0, 1, 2, 3].map((val) => {
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
              </Box>
            </Box>
            <Grid container justify="center">
              {[0, 1, 2, 3, 4, 5].map((val) => {
                return (
                  <Grid key={val} item xs={12} md={6}>
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
    (gift.data?.status.id !== STATUS.REGALO_SELECCIONADO ||
      !gift.data?.userSender ||
      gift.data?.userSender.id !== AuthService.getUserData()?.id)
  )
    return (
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={8} className="form--container">
            <Alert severity="error">{ERROR_MESSAGES.GIFT_NOT_TO_PAY}</Alert>
          </Grid>
        </Grid>
      </Container>
    );

  return <>{getView()}</>;
};

export default GiftPay;
