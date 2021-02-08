import {
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import BlockIcon from '@material-ui/icons/Block';
import React, { useState } from 'react';
import './GiftReceivedWidget.css';
import { Alert } from '@material-ui/lab';
import {
  GiftAcceptState,
  GiftReceiveData,
} from '../../../features/gifts/models/gift-accept.model';
import { ERROR_MESSAGES } from '../../../core/constants/general-messages';
import { LS_GIFT_RECEIVED_PENDING } from '../../../core/constants';

interface IGiftReceivedWidgetProps {
  giftData: GiftReceiveData;
  storeData: GiftAcceptState;
  acceptGift: (id: string, accept: boolean, blocked: boolean) => void;
}

const GiftReceivedWidget = ({
  giftData,
  storeData,
  acceptGift,
}: IGiftReceivedWidgetProps): JSX.Element => {
  const [giftState, setGiftState] = useState({
    accept: false,
    blocked: false,
  });

  const { loading, error, isSaveCompleted } = storeData;

  const giftAccept = (giftId: string) => {
    acceptGift(giftId, true, false);
    setGiftState({ accept: true, blocked: false });
  };

  const giftReject = (giftId: string) => {
    acceptGift(giftId, false, false);
    setGiftState({ accept: false, blocked: false });
  };

  const blockUser = (giftId: string) => {
    acceptGift(giftId, false, true);
    setGiftState({ accept: false, blocked: true });
  };

  const getError = () => {
    if (error && isSaveCompleted)
      return (
        <Box mt={2}>
          <Alert severity="error">{ERROR_MESSAGES.SAVE_ERROR}</Alert>
        </Box>
      );
    return null;
  };

  const getLoader = () => {
    if (loading)
      return (
        <Box display="flex" my={2} justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    return null;
  };

  const getGift = () => {
    if (isSaveCompleted && !error) {
      let successMessage = '';

      if (giftState.accept)
        successMessage =
          'El regalo fué aceptado correctamente. Podés encontrarlo en tu lista de recibidos y elegir tu regalo!';
      if (!giftState.accept && !giftState.blocked)
        successMessage = 'El regalo fué rechazado correctamente.';
      if (!giftState.accept && giftState.blocked)
        successMessage =
          'El regalo fué rechazado y el usuario bloqueado correctamente.';

      localStorage.removeItem(LS_GIFT_RECEIVED_PENDING);

      return <Alert severity="success">{successMessage}</Alert>;
    }

    return (
      <Card>
        <Box p={2}>
          <Typography variant="h5">Hola {giftData.receiver}!</Typography>
          <Typography variant="h6" style={{ color: '#666' }}>
            {giftData.sender} quiere hacerte un regalo.
          </Typography>
          {getError()}
          {getLoader()}
          <Box display="flex" flexWrap="wrap" pt={2}>
            <Button
              color="secondary"
              variant="contained"
              className="gift--pending-button"
              startIcon={<CheckIcon />}
              onClick={() => giftAccept(giftData.giftId)}
              disabled={loading}>
              Aceptar el regalo
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className="gift--pending-button"
              startIcon={<CloseIcon />}
              onClick={() => giftReject(giftData.giftId)}
              disabled={loading}>
              Rechazar el regalo
            </Button>
          </Box>
        </Box>
      </Card>
    );
  };

  return getGift();
};

export default GiftReceivedWidget;
