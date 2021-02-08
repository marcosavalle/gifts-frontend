import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
  CircularProgress,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, useLocation } from 'react-router-dom';
import { GiftState } from '../../../models/gift.model';
import { GiftBuyData, GiftBuyState } from '../../../models/gift-buy.model';

type IGiftPayFinishedProps = {
  gift: GiftState;
  giftBuy: GiftBuyState;
  buyGift: (giftBuyData: GiftBuyData, giftType: string) => void;
};

const GiftPayFinished = ({
  gift,
  giftBuy,
  buyGift,
}: IGiftPayFinishedProps): JSX.Element => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const paymentData: GiftBuyData = {
    giftId: gift.data?.id || '',
    addressId: params.get('address') || '',
    mepaCollectionId: params.get('collection_id') || '',
    mepaCollectionStatus: params.get('collection_status') || '',
    mepaExternalReference: params.get('external_reference') || '',
    mepaPaymentType: params.get('payment_type') || '',
    mepaMerchantOrderId: params.get('merchant_order_id') || '',
    mepaPreferenceId: params.get('preference_id') || '',
    mepaSiteId: params.get('site_id') || '',
    mepaProcessingMode: params.get('processing_mode') || '',
    mepaMerchantAccountId: params.get('merchant_account_id') || '',
  };

  useEffect(() => {
    if (
      !giftBuy.loading &&
      !giftBuy.isSaveCompleted &&
      !giftBuy.error &&
      paymentData.mepaCollectionStatus === 'approved'
    ) {
      buyGift(paymentData, gift.data?.type || '');
    }
  }, [giftBuy, paymentData, buyGift, gift.data?.type]);

  if (paymentData.mepaCollectionStatus !== 'approved' || giftBuy.error)
    return (
      <Container style={{ padding: 0 }} maxWidth="xl">
        <Box
          bgcolor="#f23d4f"
          width="100%"
          height="300px"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Avatar
            style={{
              width: 70,
              height: 70,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <CardGiftcardIcon color="secondary" style={{ fontSize: 40 }} />
          </Avatar>
          <Box px={2} textAlign="center">
            <Typography variant="h6">Algo salió mal...</Typography>
            <Typography variant="body1">
              El pago no fué ejecutado correctamente, podés intentarlo
              nuevamente más tarde o a través de otro medio de pago.
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 10 }}>
          <Grid item xs={12} md={8}>
            <Box my={3} display="flex" justifyContent="center">
              <Link to="/enviados">
                <Button
                  color="secondary"
                  style={{ textTransform: 'none', fontSize: '16px' }}
                  startIcon={<ArrowBackIcon />}>
                  Volver a mi lista de regalos
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );

  if (
    !giftBuy.loading &&
    giftBuy.isSaveCompleted &&
    !giftBuy.error &&
    paymentData.mepaCollectionStatus === 'approved'
  )
    return (
      <Container style={{ padding: 0 }} maxWidth="xl">
        <Box
          bgcolor="#00a650"
          width="100%"
          height="300px"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <Avatar
            style={{
              width: 70,
              height: 70,
              backgroundColor: 'white',
              marginBottom: 20,
            }}>
            <CardGiftcardIcon color="secondary" style={{ fontSize: 40 }} />
          </Avatar>
          <Box px={2} textAlign="center">
            <Typography variant="h6">¡Listo, pagaste el regalo!</Typography>
            <Typography variant="body1">
              Ahora podés seguir los movimientos del envío del paquete a través
              del detalle del mismo, pronto {gift.data?.receiverName} podrá
              disfrutar de su regalo.
            </Typography>
            <Typography variant="body1">
              Atención a las novedades en tus regalos enviados!
            </Typography>
          </Box>
        </Box>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ padding: 10 }}>
          <Grid item xs={12} md={8}>
            <Box my={3} display="flex" justifyContent="center">
              <Link to="/enviados">
                <Button
                  color="secondary"
                  style={{ textTransform: 'none', fontSize: '16px' }}
                  startIcon={<ArrowBackIcon />}>
                  Volver a mi lista de regalos
                </Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    );

  return (
    <Container style={{ padding: 0 }} maxWidth="xl">
      <Box
        width="100%"
        height="300px"
        color="secondary"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center">
        <CircularProgress color="secondary" />
        <Box mt={4}>
          <Typography variant="body1">Cargando datos del pago...</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default GiftPayFinished;
