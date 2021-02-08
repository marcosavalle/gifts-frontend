import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  Divider,
  Chip,
  Avatar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { DataItem } from '../../../shared/components/data-item/DataItem';
import { Gift } from '../../models/gift.model';
import { CHProduct, FProduct } from '../../../products/models/product.model';
import { StatusHistoryItem } from '../../../status/models/status-history.model';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

type IGiftDetailsProps = {
  gift: Gift;
  giftStatusesHistory: StatusHistoryItem[];
  isSender: boolean;
};

const GiftDetails = ({
  gift,
  giftStatusesHistory,
  isSender,
}: IGiftDetailsProps): JSX.Element => {
  const classes = useStyles();

  const getCategoriesFromProductFilter = () => {
    if (
      gift.productFilter &&
      gift.productFilter.categories &&
      gift.productFilter.categories.length
    ) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              {isSender
                ? 'Categorías que seleccionaste'
                : `Categorías que seleccionó ${gift.senderName}`}
            </Typography>
          </Box>
          <Card>
            <Box display="flex" flexWrap="wrap" py={[1, 2]} px={2}>
              {gift.productFilter?.categories.map((category) => (
                <Chip
                  key={category.meliId}
                  label={category.name}
                  variant="outlined"
                  color="secondary"
                  className="selected--chip"
                />
              ))}
            </Box>
          </Card>
        </>
      );
    }
    return null;
  };

  const getProductsFromProductFilter = () => {
    if (
      gift.productFilter &&
      gift.productFilter.products &&
      gift.productFilter.products.length
    ) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              {isSender
                ? 'Productos que seleccionaste'
                : `Productos que seleccionó ${gift.senderName}`}
            </Typography>
          </Box>
          <Grid container style={{ padding: '10px 0' }} spacing={1}>
            {gift.productFilter.products.map((product: FProduct) => (
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

  const getGeneralGiftData = () => {
    if (gift.type && gift.reason && gift.productFilter?.maxAmount) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del regalo</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="Tipo de entrega" value={gift.type} />
              <DataItem propertyName="Motivo del regalo" value={gift.reason} />
              <DataItem
                propertyName="Presupuesto máximo"
                value={`$ ${Number(gift.productFilter.maxAmount).toLocaleString(
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
    if (gift.productsChosen) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              {isSender
                ? `Productos que seleccionó ${gift.receiverName}`
                : 'Productos que seleccionaste'}
            </Typography>
          </Box>
          <Grid container style={{ padding: '10px 0' }} spacing={1}>
            {gift.productsChosen.products.map((product) => (
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

  const getPaymentData = () => {
    const getTotalGiftCost = (products: CHProduct[]) => {
      const productPrices = products.map((product) => product.price);

      return productPrices.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    };

    if (isSender && gift.productsChosen && gift.payment) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del Pago</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem
                propertyName="Fecha del pago"
                value={moment(new Date(Number(gift.payment.paidDate)))
                  .format('D [de] MMMM [de] YYYY')
                  .toString()}
              />
              <DataItem
                propertyName="Medio de pago"
                value={
                  gift.payment.name === 'credit_card'
                    ? 'Tarjeta de crédito'
                    : 'Tarjeta de débito'
                }
              />
              <DataItem
                propertyName="Costo final"
                value={`$ ${Number(
                  getTotalGiftCost(gift.productsChosen.products)
                ).toLocaleString('de-DE')}`}
              />
            </Box>
          </Card>
        </>
      );
    }

    return null;
  };

  const getGiftStatusHistory = () => {
    if (giftStatusesHistory && giftStatusesHistory.length) {
      const hasNullContent = giftStatusesHistory.some(
        (giftStatus) => giftStatus === null
      );
      if (!hasNullContent) {
        return (
          <>
            <Box pt={4} pb={2}>
              <Typography variant="subtitle1">Historial de Estados</Typography>
            </Box>
            <Card>
              <Timeline>
                {giftStatusesHistory.map((giftStatusHistoryItem, index) => (
                  <TimelineItem key={giftStatusHistoryItem.date}>
                    <TimelineSeparator>
                      <TimelineDot style={{ backgroundColor: '#00a650' }} />
                      {index < giftStatusesHistory.length - 1 ? (
                        <TimelineConnector
                          style={{ backgroundColor: '#00a650' }}
                        />
                      ) : null}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography
                        style={{
                          color: index === 0 ? '#00a650' : '#999',
                          padding: 0,
                          margin: 0,
                          fontSize: '17px',
                          fontWeight: 500,
                        }}>
                        {giftStatusHistoryItem.status.name}
                      </Typography>
                      <Typography
                        style={{
                          color: index === 0 ? '#00a650' : '#999',
                          padding: 0,
                          margin: 0,
                          fontSize: '17px',
                          fontWeight: 500,
                        }}>
                        {moment(new Date(Number(giftStatusHistoryItem.date)))
                          .format('D MMM HH:mm')
                          .toString()}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Card>
          </>
        );
      }
      return null;
    }
    return null;
  };

  const getDeliveryData = () => {
    if (gift.delivery) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del Envío</Typography>
          </Box>
          <Card>
            <Box>
              <Timeline>
                {gift.delivery.statusesHistory.map(
                  (giftStatusHistoryItem, index) => (
                    <TimelineItem key={giftStatusHistoryItem.status.id}>
                      <TimelineSeparator>
                        <TimelineDot style={{ backgroundColor: '#00a650' }} />
                        {index < giftStatusesHistory.length - 1 ? (
                          <TimelineConnector
                            style={{ backgroundColor: '#00a650' }}
                          />
                        ) : null}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography
                          style={{
                            color: index === 0 ? '#00a650' : '#999',
                            padding: 0,
                            margin: 0,
                            fontSize: '17px',
                            fontWeight: 500,
                          }}>
                          {giftStatusHistoryItem.status.name}
                        </Typography>
                        <Typography
                          style={{
                            color: index === 0 ? '#00a650' : '#999',
                            padding: 0,
                            margin: 0,
                            fontSize: '17px',
                            fontWeight: 500,
                          }}>
                          {moment(new Date(Number(giftStatusHistoryItem.date)))
                            .format('D MMM HH:mm')
                            .toString()}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  )
                )}
              </Timeline>
            </Box>
            <Box>
              {gift.delivery.deliveredDate ? (
                <DataItem
                  propertyName="Fecha de entrega"
                  value={moment(new Date(Number(gift.delivery.deliveredDate)))
                    .format('D [de] MMMM [de] YYYY')
                    .toString()}
                />
              ) : null}

              <DataItem
                propertyName="Calle"
                value={gift.delivery.deliveryAddress.street}
              />
              <DataItem
                propertyName="Número"
                value={gift.delivery.deliveryAddress.number}
              />

              {gift.delivery.deliveryAddress.apt ? (
                <DataItem
                  propertyName="Dpto."
                  value={gift.delivery.deliveryAddress.apt}
                />
              ) : null}

              {gift.delivery.deliveryAddress.description ? (
                <DataItem
                  propertyName="Descripción"
                  value={gift.delivery.deliveryAddress.description}
                />
              ) : null}

              {gift.delivery.deliveryAddress.contactPhone ? (
                <DataItem
                  propertyName="Teléfono de Contacto"
                  value={gift.delivery.deliveryAddress.contactPhone}
                />
              ) : null}

              <DataItem
                propertyName="Código Postal"
                value={gift.delivery.deliveryAddress.postalCode}
              />
              <DataItem
                propertyName="Localidad"
                value={gift.delivery.deliveryAddress.locality}
              />
              <DataItem
                propertyName="Provincia"
                value={gift.delivery.deliveryAddress.province}
              />
              <DataItem
                propertyName="País"
                value={gift.delivery.deliveryAddress.country}
              />
            </Box>
          </Card>
        </>
      );
    }
    return null;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Detalles del regalo</Typography>
          <Box py={2}>
            <Typography variant="subtitle1">¿De quién y para quién?</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="De" value={gift.senderName} />
              <DataItem propertyName="Para" value={gift.receiverName} />
            </Box>
          </Card>
          {getGeneralGiftData()}
          {getCategoriesFromProductFilter()}
          {getProductsFromProductFilter()}
          {getProductsFromProductsChosen()}
          {getDeliveryData()}
          {getPaymentData()}
          {getGiftStatusHistory()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftDetails;
