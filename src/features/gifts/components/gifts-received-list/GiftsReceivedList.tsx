import React from 'react';
import { Alert } from '@material-ui/lab';
import { Box, CircularProgress } from '@material-ui/core';
import GiftCard from '../gift-card/GiftCard';
import { Gift } from '../../models/gift.model';
import './GiftsReceivedList.css';
import { GiftCancelState } from '../../models/gift-cancel.model';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';

interface GiftsReceivedProps {
  giftsReceived: Gift[];
  handleCancelGift: (id: string) => void;
  giftCancel: GiftCancelState;
}

const GiftsReceivedList = ({
  giftsReceived,
  handleCancelGift,
  giftCancel,
}: GiftsReceivedProps): JSX.Element => {
  const getLoader = () => {
    if (giftCancel.loading)
      return (
        <Box display="flex" my={2} justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    return null;
  };

  const getError = () => {
    if (giftCancel.error && giftCancel.isSaveCompleted)
      return (
        <Box my={2}>
          <Alert severity="error">{ERROR_MESSAGES.SAVE_ERROR}</Alert>
        </Box>
      );
    return null;
  };

  return (
    <>
      {getLoader()}
      {getError()}
      {giftsReceived.map((gift: Gift) => (
        <GiftCard
          key={gift.id}
          gift={gift}
          handleCancelGift={handleCancelGift}
        />
      ))}
    </>
  );
};

export default GiftsReceivedList;
