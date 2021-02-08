import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  LOGIN_ENDPOINT,
  LS_GIFT_RECEIVED_PENDING,
} from '../../../../core/constants';
import meliLogo from '../../../../resources/images/logo_icon.png';
import { GiftReceiveData } from '../../models/gift-accept.model';

const saveDataAndGoToLogin = (giftData: GiftReceiveData) => {
  localStorage.setItem(
    LS_GIFT_RECEIVED_PENDING,
    btoa(JSON.stringify(giftData))
  );
  window.location.href = LOGIN_ENDPOINT as string;
};

const GiftReceivedReception = (): JSX.Element => {
  const { hash } = useParams<{ hash: string }>();
  const giftData = JSON.parse(atob(hash)) as GiftReceiveData;

  return (
    <Container style={{ paddingTop: 40 }}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent style={{ padding: 30 }}>
              <Box display="flex" flexDirection="row" justifyContent="center">
                <Avatar
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'white',
                    marginBottom: 20,
                  }}>
                  <CardGiftcardIcon
                    color="secondary"
                    style={{ fontSize: 60 }}
                  />
                </Avatar>
                <Avatar
                  style={{
                    width: 100,
                    height: 100,
                    backgroundColor: 'white',
                    marginBottom: 20,
                  }}>
                  <img
                    src={meliLogo}
                    alt="Meli logo"
                    style={{ height: '50px', width: 'auto' }}
                  />
                </Avatar>
              </Box>
              <Typography variant="h5">Regalo recibido!</Typography>
              <Typography variant="h6" style={{ marginTop: 10 }}>
                Hola {giftData.receiver}, parece que {giftData.sender} quiere
                hacerte un regalo!
              </Typography>
              <Typography variant="caption">
                Si querés aceptar el regalo hacé click en el botón siguiente, en
                caso contrario podés cerrar esta ventana y desestimarla.
              </Typography>
              <Box my={3} display="flex" justifyContent="center">
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ textTransform: 'none', fontSize: '16px' }}
                  startIcon={<ExitToAppIcon />}
                  onClick={() => saveDataAndGoToLogin(giftData)}>
                  Quiero el regalo! ir a la App
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftReceivedReception;
