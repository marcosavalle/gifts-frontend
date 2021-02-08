import './ShareGift.css';
import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  Avatar,
  Snackbar,
  Fab,
  Button,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Layout from '../../../shared/components/layout/Layout';
import { CLIENT_BASE_URL } from '../../../core/constants/index';
import { AuthService } from '../../../core/services/auth.service';
import { ShareGiftReduxActions, ShareGiftReduxProps } from './interfaces';
import Loader from '../../../shared/components/loader/Loader';

type ShareGiftProps = ShareGiftReduxActions & ShareGiftReduxProps;

const ShareGift = ({ gift, getGift }: ShareGiftProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);
  let giftURL = '';

  useEffect(() => {
    getGift(id);
  }, [getGift, id]);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(giftURL);
    setOpen(true);
  };

  const getShareScreen = () => {
    const currentUser = AuthService.getUserData();

    if (gift.loading) {
      return <Loader />;
    }
    if (gift.error) {
      return (
        <Alert severity="error" variant="outlined">
          Hubo un problema obteniendo el regalo.
        </Alert>
      );
    }

    if (gift.data == null) {
      return (
        <Alert severity="error" variant="outlined">
          No se pudo encontrar el regalo solicitado.
        </Alert>
      );
    }

    if (gift.data?.userSender.id !== currentUser?.id) {
      return (
        <Alert severity="warning" variant="outlined">
          No tienes permiso para compartir este regalo.
        </Alert>
      );
    }
    if (gift.data && gift.data.userSender.id === currentUser?.id) {
      const giftData = {
        sender: gift.data.senderName,
        receiver: gift.data.receiverName,
        giftId: gift.data.id,
      };

      const hashed = btoa(JSON.stringify(giftData));
      giftURL = `${CLIENT_BASE_URL || ''}/gr/${hashed}`;

      const whatsappLink = `whatsapp://send?text=${giftURL}`;
      const emailSubject = 'Hola! quiero hacerte un regalo';
      const emailLink = `mailto:?subject=${emailSubject}&body=${giftURL}`;

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
              <Typography variant="h6">¡Comparte tu regalo!</Typography>
            </Box>
          </Box>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ padding: 10 }}>
            <Grid item xs={12} md={8}>
              <Card className="gift--link-container">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexWrap="wrap">
                  <Fab
                    variant="extended"
                    color="secondary"
                    onClick={copyToClipboard}
                    style={{ marginRight: '10px' }}>
                    <LinkOutlinedIcon className="success--message-icon" />
                    Copiar link
                  </Fab>
                  <Fab
                    variant="extended"
                    color="secondary"
                    href={whatsappLink}
                    target="_blank"
                    style={{ marginRight: '10px' }}>
                    <WhatsAppIcon className="success--message-icon" />
                    Compartir
                  </Fab>
                  <Fab
                    variant="extended"
                    color="secondary"
                    href={emailLink}
                    target="_blank"
                    style={{ marginRight: '10px' }}>
                    <MailOutlineIcon className="success--message-icon" />
                    Compartir
                  </Fab>
                </Box>
              </Card>
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
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Link copiado al portapapeles
            </Alert>
          </Snackbar>
        </Container>
      );
    }

    return null;
  };

  return <Layout>{getShareScreen()}</Layout>;
};

export default ShareGift;
