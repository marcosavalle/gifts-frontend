import {
  Box,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthService } from '../../../../core/services/auth.service';
import GiftDetails from './GiftDetails';
import { IGiftDetailsReduxActions, IGiftDetailsReduxProps } from './interfaces';

type TGiftDetailsBaseProps = IGiftDetailsReduxActions & IGiftDetailsReduxProps;

const GiftDetailsBase = ({
  gift,
  giftStatusesHistory,
  getGift,
  getGiftStatusesHistory,
}: TGiftDetailsBaseProps): JSX.Element => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    getGift(id);
    getGiftStatusesHistory(id);
  }, [getGift, getGiftStatusesHistory, id]);

  const renderGiftDetails = () => {
    const userData = AuthService.getUserData();
    let isSender: boolean;
    if (userData?.id === gift.data?.userSender?.id) {
      isSender = true;
    } else {
      isSender = false;
    }

    if (
      gift.isFetchCompleted === true &&
      gift.data &&
      giftStatusesHistory.data
    ) {
      return (
        <>
          <GiftDetails
            isSender={isSender}
            gift={gift.data}
            giftStatusesHistory={giftStatusesHistory.data}
          />
        </>
      );
    }

    return null;
  };

  if (gift.loading)
    return (
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} md={8} className="form--container">
            <Box py={2}>
              <Skeleton width="40%">
                <Typography variant="h3">.</Typography>
              </Skeleton>
              <Box mt={2}>
                <Card>
                  {[0, 1, 2, 3].map((val) => {
                    return (
                      <Fragment key={val}>
                        <Box
                          display="flex"
                          bgcolor="white"
                          alignItems="center"
                          p={2}>
                          <Skeleton width="80%">
                            <Typography variant="h5">.</Typography>
                          </Skeleton>
                        </Box>
                        <Divider style={{ backgroundColor: '#eee' }} />
                      </Fragment>
                    );
                  })}
                </Card>
              </Box>
            </Box>
            <Grid container justify="center">
              {[0, 1, 2, 3, 4, 5].map((val) => {
                return (
                  <Grid key={val} item xs={12} md={6}>
                    <Box
                      display="flex"
                      bgcolor="white"
                      alignItems="center"
                      px={2}
                      py={2}>
                      <Skeleton variant="rect" width={100} height={100} />
                      <Box p={2} width="100%">
                        <Skeleton width="90%">
                          <Typography variant="h5">.</Typography>
                        </Skeleton>
                        <Skeleton width="60%">
                          <Typography variant="h4">.</Typography>
                        </Skeleton>
                      </Box>
                    </Box>
                    <Divider style={{ backgroundColor: '#eee' }} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );

  return <>{renderGiftDetails()}</>;
};

export default GiftDetailsBase;
