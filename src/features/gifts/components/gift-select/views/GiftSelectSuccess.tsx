import {
  Container,
  Grid,
  Typography,
  Box,
  Avatar,
  Button,
} from '@material-ui/core';
import React from 'react';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { GiftState } from '../../../models/gift.model';

interface IGiftSelectSuccessProps {
  gift: GiftState;
}

const GiftSelectSuccess = ({ gift }: IGiftSelectSuccessProps): JSX.Element => {
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
          <Typography variant="h6">¡Listo, elegiste tu regalo!</Typography>
          <Typography variant="body1">
            Ahora tenés que esperar que {gift.data?.senderName} finalice la
            compra del mismo,
          </Typography>
          <Typography variant="body1">
            atención a las novedades en tus regalos recibidos!
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
            <Link to="/recibidos">
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
};

export default GiftSelectSuccess;
