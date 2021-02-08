import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import GiftBoxIcon from '@material-ui/icons/Redeem';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import currency from 'currency.js';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { GiftState } from '../../../models/gift.model';
import { DataItem } from '../../../../shared/components/data-item/DataItem';
import { FProduct } from '../../../../products/models/product.model';
import { GIFT_SELECT_FORM } from '../../../../../core/constants/gift-form';
import { AddressesState } from '../../../../addresses/models/addresses.model';
import AddressSelectList from '../../../../addresses/components/address-select-list/AddressSelectList';
import { Address } from '../../../../addresses/models/address.model';

type IMainFormProps = {
  gift: GiftState;
  selectProduct: (selectedProduct: FProduct) => void;
  selectedProducts: FProduct[];
  deleteProduct: (meliId: string) => void;
  selectedAmount: number;
  handleView: (view: string) => void;
  handleCategory: (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => void;
  selectedCategory: string;
  addresses: AddressesState;
  handleConfirmGift: () => void;
  selectAddress: (selectedAddress: Address) => void;
  selectedAddress: string;
  isSavingGiftSelect: boolean;
};

const MainForm = ({
  gift,
  selectProduct,
  selectedProducts,
  deleteProduct,
  selectedAmount,
  handleView,
  handleCategory,
  selectedCategory,
  addresses,
  handleConfirmGift,
  selectAddress,
  selectedAddress,
  isSavingGiftSelect,
}: IMainFormProps): JSX.Element | null => {
  if (!gift.data) return null;

  const { categories, products, maxAmount } = gift.data.productFilter;
  const { senderName } = gift.data;

  const getCategories = () => {
    if (categories && categories.length) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              Categorías sugeridas por {senderName}
            </Typography>
          </Box>
          <Card>
            <Box display="flex" flexWrap="wrap" py={[1, 2]} px={2}>
              <ToggleButtonGroup
                value={selectedCategory}
                onChange={handleCategory}
                exclusive>
                {categories.map((category) => (
                  <ToggleButton value={category.meliId} key={category.meliId}>
                    <Chip
                      key={category.meliId}
                      label={category.name}
                      variant="outlined"
                      color="secondary"
                      className="selected--chip"
                    />
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
            <Box px={4} py={2}>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                style={{
                  textTransform: 'none',
                  fontSize: '14px',
                  width: '100%',
                }}
                startIcon={<SearchIcon />}
                onClick={() => handleView(GIFT_SELECT_FORM.VIEWS.PRODUCTS_FORM)}
                disabled={!selectedCategory || isSavingGiftSelect}>
                Buscar productos
              </Button>
              {!selectedCategory ? (
                <Typography variant="caption" color="error">
                  * Seleccioná al menos una categoría para buscar productos.
                </Typography>
              ) : null}
            </Box>
          </Card>
        </>
      );
    }
    return null;
  };

  const getProductButton = (product: FProduct) => {
    if (selectedProducts.filter((p) => p.meliId === product.meliId).length) {
      return (
        <Button
          color="secondary"
          variant="contained"
          size="small"
          style={{ textTransform: 'none', fontSize: '14px' }}
          startIcon={<ClearIcon />}
          onClick={() => deleteProduct(product.meliId)}
          disabled={isSavingGiftSelect}>
          Remover
        </Button>
      );
    }

    return (
      <Button
        color="secondary"
        variant="outlined"
        size="small"
        style={{ textTransform: 'none', fontSize: '14px' }}
        startIcon={<AddIcon />}
        onClick={() => selectProduct(product)}
        disabled={
          Number(currency(selectedAmount).add(product.price)) >
            Number(maxAmount) || isSavingGiftSelect
        }>
        Seleccionar
      </Button>
    );
  };

  const getSuggestedProducts = () => {
    if (products && products.length) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              Productos sugeridos por {senderName}
            </Typography>
          </Box>
          <Grid container style={{ padding: '10px 0' }} spacing={1}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.meliId}>
                <Box bgcolor="white">
                  <Box display="flex" alignItems="center" p={1}>
                    <Avatar
                      variant="square"
                      src={product.picture}
                      style={{ width: 70, height: 70 }}
                    />
                    <Box pl={[1, 2]}>
                      <Typography variant="caption" component="p">
                        {product.name}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        $ {product.price}
                      </Typography>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="flex-end" pr={1} pb={1}>
                    {getProductButton(product)}
                  </Box>
                </Box>
                <Divider style={{ backgroundColor: '#eee' }} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
    return null;
  };

  const getSelectedProducts = () => {
    if (selectedProducts.length) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              Tus productos seleccionados
            </Typography>
          </Box>
          {selectedProducts.map((product) => (
            <Box bgcolor="white" key={product.meliId}>
              <Box display="flex" alignItems="center" p={1}>
                <Avatar
                  variant="square"
                  src={product.picture}
                  style={{ width: 70, height: 70 }}
                />
                <Box pl={[1, 2]}>
                  <Typography variant="caption" component="p">
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" component="p">
                    $ {product.price}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="flex-end" pr={1} pb={1}>
                <Button
                  color="secondary"
                  variant="contained"
                  size="small"
                  style={{ textTransform: 'none', fontSize: '14px' }}
                  startIcon={<ClearIcon />}
                  onClick={() => deleteProduct(product.meliId)}
                  disabled={isSavingGiftSelect}>
                  Remover
                </Button>
              </Box>
              <Divider style={{ backgroundColor: '#eee' }} />
            </Box>
          ))}
        </>
      );
    }
    return null;
  };

  const getAddressForm = () => {
    if (gift.data?.type === 'Presencial') return null;
    return (
      <>
        <Box pt={4} pb={2}>
          <Typography variant="subtitle1">Domicilio de envío</Typography>
        </Box>
        <AddressSelectList
          addresses={addresses}
          selectAddress={selectAddress}
          selectedAddress={selectedAddress}
        />
        <Box pt={2}>
          <Button
            color="secondary"
            variant="outlined"
            size="small"
            style={{
              textTransform: 'none',
              fontSize: '14px',
              width: '100%',
            }}
            startIcon={<AddIcon />}
            onClick={() => handleView(GIFT_SELECT_FORM.VIEWS.ADDRESS_FORM)}
            disabled={isSavingGiftSelect}>
            Agregar domicilio
          </Button>
        </Box>
      </>
    );
  };

  const isConfirmButtonEnabled = (): boolean => {
    if (gift.data?.type === 'Remoto' && !selectedAddress) return false;
    if (!selectedProducts.length) return false;
    if (isSavingGiftSelect) return false;
    return true;
  };

  return (
    <Container>
      <Grid container justify="center">
        <Grid item xs={12} className="form--container">
          <Box display="flex" alignItems="center">
            <GiftBoxIcon fontSize="large" style={{ marginRight: '8px' }} />
            <Typography variant="h5">Armá tu caja de regalos</Typography>
          </Box>
          <Grid container justify="center">
            <Grid item xs={12} md={6} style={{ padding: '0 10px' }}>
              <Box pt={4} pb={2}>
                <Typography variant="subtitle1">Presupuesto</Typography>
              </Box>
              <Box>
                <Card>
                  <DataItem
                    propertyName="Máximo"
                    value={`$ ${Number(maxAmount).toLocaleString('de-DE')}`}
                  />
                  <DataItem
                    propertyName="Seleccionado"
                    value={`$ ${Number(selectedAmount).toLocaleString(
                      'de-DE'
                    )}`}
                  />
                  <DataItem
                    propertyName="Restante"
                    value={`$ ${Number(
                      currency(maxAmount).subtract(selectedAmount)
                    ).toLocaleString('de-DE')}`}
                  />
                </Card>
              </Box>
              {getSuggestedProducts()}
              {getCategories()}
              {getAddressForm()}
            </Grid>
            <Grid item xs={12} md={6} style={{ padding: '0 10px' }}>
              {getSelectedProducts()}
            </Grid>
          </Grid>
          {isSavingGiftSelect ? (
            <Box
              display="flex"
              my={2}
              justifyContent="center"
              alignItems="center">
              <CircularProgress color="secondary" />
            </Box>
          ) : null}
          <Box mt={4}>
            <Button
              color="secondary"
              variant="contained"
              style={{
                textTransform: 'none',
                fontSize: '18px',
                width: '100%',
              }}
              startIcon={<GiftBoxIcon />}
              onClick={() => handleConfirmGift()}
              disabled={!isConfirmButtonEnabled()}>
              Confirmar regalo
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainForm;
