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
import React, { useState } from 'react';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Alert } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { GiftState } from '../../../models/gift.model';
import { CLIENT_BASE_URL } from '../../../../../core/constants';

interface IGiftFormSuccessProps {
  storeData: {
    gift: GiftState;
  };
}

const GiftFormSuccess = ({ storeData }: IGiftFormSuccessProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  const giftData = {
    sender: storeData.gift.data?.senderName,
    receiver: storeData.gift.data?.receiverName,
    giftId: storeData.gift.data?.id,
  };

  const hashed = btoa(JSON.stringify(giftData));

  const giftUrl = `${CLIENT_BASE_URL || ''}/gr/${hashed}`;

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(giftUrl);
    setOpen(true);
  };

  const whatsappLink = `whatsapp://send?text=${giftUrl}`;
  const emailSubject = 'Hola! quiero hacerte un regalo';
  const emailLink = `mailto:?subject=${emailSubject}&body=${giftUrl}`;

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
          <Typography variant="h6">¡Listo, creaste el regalo!</Typography>
          <Typography variant="body1">
            Ahora podés compartirlo con la persona que querés que lo reciba.
          </Typography>
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
};

export default GiftFormSuccess;
