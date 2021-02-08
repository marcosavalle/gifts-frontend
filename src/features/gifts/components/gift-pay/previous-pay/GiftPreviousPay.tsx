import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import AddressSelectList from '../../../../addresses/components/address-select-list/AddressSelectList';
import { Address } from '../../../../addresses/models/address.model';
import { AddressesState } from '../../../../addresses/models/addresses.model';
import { DataItem } from '../../../../shared/components/data-item/DataItem';
import { GiftState } from '../../../models/gift.model';

type IGiftPreviousPayProps = {
  gift: GiftState;
  goAddressForm: () => void;
  addresses: AddressesState;
  handlePayGift: () => void;
  selectAddress: (selectedAddress: Address) => void;
  selectedAddress: string;
  isGettingPaymentUrl: boolean;
};

const GiftPreviousPay = ({
  gift,
  goAddressForm,
  addresses,
  handlePayGift,
  selectAddress,
  selectedAddress,
  isGettingPaymentUrl,
}: IGiftPreviousPayProps): JSX.Element | null => {
  if (!gift.data) return null;

  const { products } = gift.data.productsChosen;
  const {
    userReceiver,
    delivery,
    receiverName,
    type,
    reason,
    productFilter,
  } = gift.data;

  const getTotalGiftCost = () => {
    const productPrices = products.map((product) => product.price);

    return productPrices.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
  };

  const getGeneralGiftData = () => {
    if (type && reason && productFilter?.maxAmount) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del regalo</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="Tipo de entrega" value={type} />
              <DataItem propertyName="Motivo del regalo" value={reason} />
              <DataItem
                propertyName="Presupuesto máximo"
                value={`$ ${Number(productFilter.maxAmount).toLocaleString(
                  'de-DE'
                )}`}
              />
              <DataItem
                propertyName="Presupuesto utilizado"
                value={`$ ${Number(getTotalGiftCost()).toLocaleString(
                  'de-DE'
                )}`}
              />
            </Box>
          </Card>
        </>
      );
    }

    return null;
  };

  const getProductsFromProductsChosen = () => {
    if (products) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              Productos seleccionados por {receiverName}
            </Typography>
          </Box>
          <Grid container style={{ padding: '10px 0' }} spacing={1}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.id}>
                <Box bgcolor="white">
                  <Box display="flex" alignItems="center" p={1}>
                    <Avatar
                      variant="square"
                      src={product.pictures}
                      style={{ width: 70, height: 70 }}
                    />
                    <Box pl={[1, 2]}>
                      <Typography variant="caption" component="p">
                        {product.title}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        $ {product.price}
                      </Typography>
                    </Box>
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

  const getDeliveryData = () => {
    if (delivery) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del Envío</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem
                propertyName="Calle y número"
                value={`${delivery.deliveryAddress.street} ${delivery.deliveryAddress.number}`}
              />

              {delivery.deliveryAddress.apt ? (
                <DataItem
                  propertyName="Dpto."
                  value={delivery.deliveryAddress.apt}
                />
              ) : null}

              {delivery.deliveryAddress.description ? (
                <DataItem
                  propertyName="Descripción"
                  value={delivery.deliveryAddress.description}
                />
              ) : null}

              {delivery.deliveryAddress.contactPhone ? (
                <DataItem
                  propertyName="Teléfono de Contacto"
                  value={delivery.deliveryAddress.contactPhone}
                />
              ) : null}

              <DataItem
                propertyName="Código Postal"
                value={delivery.deliveryAddress.postalCode}
              />

              <DataItem
                propertyName="Localidad"
                value={delivery.deliveryAddress.locality}
              />

              <DataItem
                propertyName="Provincia"
                value={delivery.deliveryAddress.province}
              />
            </Box>
          </Card>
        </>
      );
    }

    if (type === 'Presencial' && !delivery)
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Domicilio de envío</Typography>
          </Box>
          <Alert
            severity="info"
            variant="outlined"
            style={{ marginBottom: '20px' }}>
            El tipo de entrega del regalo es Presencial, por lo que debes
            seleccionar la dirección a la que será enviado.
          </Alert>
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
              onClick={() => goAddressForm()}
              disabled={isGettingPaymentUrl}>
              Agregar domicilio
            </Button>
          </Box>
        </>
      );

    return null;
  };

  const isPayButtonEnabled = (): boolean => {
    if (type === 'Presencial' && !selectedAddress) return false;
    if (isGettingPaymentUrl) return false;
    return true;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Detalles del regalo a pagar</Typography>
          <Alert
            severity="info"
            variant="outlined"
            style={{ marginTop: '20px' }}>
            Antes de realizar el pago revisá que todos los datos se encuentren
            correctos ya que una vez realizado no se podrá revertir. Si la
            persona que va a recibir los productos no es la correcta te
            sugerimos Resetear el regalo para compartirlo nuevamente.
          </Alert>
          <Box py={2}>
            <Typography variant="subtitle1">
              ¿Quién recibe el regalo?
            </Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="Nombre" value={userReceiver.name} />
              <DataItem propertyName="Apellido" value={userReceiver.lastName} />
            </Box>
          </Card>
          {getGeneralGiftData()}
          {getProductsFromProductsChosen()}
          {getDeliveryData()}
          <Box mt={4}>
            <Button
              color="secondary"
              variant="contained"
              style={{
                textTransform: 'none',
                fontSize: '18px',
                width: '100%',
              }}
              onClick={() => handlePayGift()}
              disabled={!isPayButtonEnabled()}>
              Pagar {`$ ${Number(getTotalGiftCost()).toLocaleString('de-DE')}`}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftPreviousPay;
