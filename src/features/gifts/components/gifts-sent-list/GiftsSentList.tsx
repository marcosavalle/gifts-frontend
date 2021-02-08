import React from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Gift } from '../../models/gift.model';
import './GiftsSentList.css';
import GiftCard from '../gift-card/GiftCard';
import { GiftCancelState } from '../../models/gift-cancel.model';
import { GiftResetState } from '../../models/gift-reset.model';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';

interface GiftsSentListProps {
  gifts: Gift[];
  handleCancelGift: (id: string) => void;
  handleResetGift: (id: string) => void;
  giftCancel: GiftCancelState;
  giftReset: GiftResetState;
}

const GiftsSentList = ({
  gifts,
  handleCancelGift,
  handleResetGift,
  giftCancel,
  giftReset,
}: GiftsSentListProps): JSX.Element => {
  const getLoader = () => {
    if (giftCancel.loading || giftReset.loading)
      return (
        <Box display="flex" my={2} justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    return null;
  };

  const getError = () => {
    if (
      (giftCancel.error && giftCancel.isSaveCompleted) ||
      (giftReset.error && giftReset.isResetCompleted)
    )
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
      {gifts.map((gift: Gift) => (
        <GiftCard
          key={gift.id}
          gift={gift}
          handleResetGift={handleResetGift}
          handleCancelGift={handleCancelGift}
        />
      ))}
    </>
  );
};

export default GiftsSentList;
