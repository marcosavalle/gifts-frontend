import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import GiftsFilters from '../gifts-filters/GiftsFilters';
import GiftsSentList from '../gifts-sent-list/GiftsSentList';
import './GiftsSent.css';
import { GiftsSentReduxActions, GiftsSentReduxProps } from './interfaces';
import {
  EMPTY_MESSAGES,
  ERROR_MESSAGES,
} from '../../../../core/constants/general-messages';

type GiftSentProps = GiftsSentReduxProps & GiftsSentReduxActions;

const GiftsSent = ({
  giftCancel,
  giftReset,
  giftsSent,
  status,
  cancelGift,
  getGiftsSent,
  getStatus,
  resetGift,
  clearGiftCancel,
  clearGiftReset,
}: GiftSentProps): JSX.Element => {
  const initialFromDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
  const initialToDate = moment().format('YYYY-MM-DD');

  const [filters, setFilters] = useState({
    fromDate: initialFromDate,
    toDate: initialToDate,
    statusId: '',
  });

  useEffect(() => {
    const { fromDate, toDate, statusId } = giftsSent.filters;

    if (!fromDate && !toDate && !statusId) {
      getStatus();
      getGiftsSent({
        fromDate: initialFromDate,
        toDate: initialToDate,
        statusId: '',
      });
    } else {
      setFilters({
        fromDate,
        toDate,
        statusId,
      });
    }
  }, [
    getGiftsSent,
    getStatus,
    initialFromDate,
    initialToDate,
    giftsSent.filters,
  ]);

  useEffect(() => {
    const { loading, isSaveCompleted, error } = giftCancel;

    if (!loading && !error && isSaveCompleted) {
      getGiftsSent(filters);
      clearGiftCancel();
    }
  }, [getGiftsSent, giftCancel, filters, clearGiftCancel]);

  useEffect(() => {
    const { loading, isResetCompleted, error } = giftReset;

    if (!loading && !error && isResetCompleted) {
      getGiftsSent(filters);
      clearGiftReset();
    }
  }, [getGiftsSent, giftReset, filters, clearGiftReset]);

  const handleFromDate = (date: MaterialUiPickersDate) => {
    setFilters({ ...filters, fromDate: date?.format('YYYY-MM-DD') || '' });
  };

  const handleToDate = (date: MaterialUiPickersDate) => {
    setFilters({ ...filters, toDate: date?.format('YYYY-MM-DD') || '' });
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      statusId: (event.target as HTMLInputElement).value,
    });
  };

  const handleCancelGift = (id: string) => {
    cancelGift(id);
  };

  const handleResetGift = (id: string) => {
    resetGift(id);
  };

  const { loading, data, isFetchCompleted, error } = giftsSent;

  const getGifts = () => {
    if (loading)
      return (
        <>
          {[0, 1, 2, 3, 4, 5].map((val) => {
            return (
              <Card key={val} style={{ marginBottom: '15px' }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  p={[2, 3]}
                  justifyContent="center">
                  <Box display="flex">
                    <Skeleton width="10%" style={{ marginRight: 10 }}>
                      <Typography variant="h6">.</Typography>
                    </Skeleton>
                    <Skeleton width="60%">
                      <Typography variant="h6">.</Typography>
                    </Skeleton>
                  </Box>
                  <Skeleton width="50%" />
                  <Skeleton width="50%" />
                  <Divider
                    style={{ backgroundColor: '#eee', margin: '10px 0' }}
                  />
                  <Box display="flex" py={1}>
                    <Skeleton width="20%" style={{ marginRight: 10 }} />
                    <Skeleton width="50%" />
                  </Box>
                </Box>
              </Card>
            );
          })}
        </>
      );

    if (!loading && error)
      return <Alert severity="error">{ERROR_MESSAGES.FETCH_ERROR}</Alert>;

    if (isFetchCompleted && !data.length)
      return (
        <Alert severity="info" variant="outlined">
          {EMPTY_MESSAGES.GIFTS}
        </Alert>
      );

    return (
      <GiftsSentList
        gifts={data}
        handleResetGift={handleResetGift}
        handleCancelGift={handleCancelGift}
        giftCancel={giftCancel}
        giftReset={giftReset}
      />
    );
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            py={3}>
            <Typography variant="h5">Regalos enviados</Typography>
            <GiftsFilters
              filters={filters}
              handleFromDate={handleFromDate}
              handleToDate={handleToDate}
              handleStatusChange={handleStatusChange}
              status={status}
              getGifts={getGiftsSent}
            />
          </Box>
          {getGifts()}
        </Grid>
      </Grid>
    </Container>
  );
};

function areEqual(prevProps: GiftSentProps, nextProps: GiftSentProps) {
  return (
    prevProps.giftsSent.data === nextProps.giftsSent.data &&
    prevProps.giftsSent.error === nextProps.giftsSent.error &&
    prevProps.giftsSent.isFetchCompleted ===
      nextProps.giftsSent.isFetchCompleted &&
    prevProps.giftsSent.loading === nextProps.giftsSent.loading &&
    prevProps.giftReset.loading === nextProps.giftReset.loading &&
    prevProps.giftReset.isResetCompleted ===
      nextProps.giftReset.isResetCompleted &&
    prevProps.giftReset.error === nextProps.giftReset.error &&
    prevProps.giftCancel.loading === nextProps.giftCancel.loading &&
    prevProps.giftCancel.isSaveCompleted ===
      nextProps.giftCancel.isSaveCompleted &&
    prevProps.giftCancel.error === nextProps.giftCancel.error
  );
}

export default React.memo(GiftsSent, areEqual);
