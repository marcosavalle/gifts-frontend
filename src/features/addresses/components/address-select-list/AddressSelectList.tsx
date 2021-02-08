import { Box, Card, Divider, Grid, Typography } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import React, { Fragment } from 'react';
import {
  EMPTY_MESSAGES,
  ERROR_MESSAGES,
} from '../../../../core/constants/general-messages';
import { Address } from '../../models/address.model';
import { AddressesState } from '../../models/addresses.model';
import AddressSelectCard from '../adress-select-card/AddressSelectCard';

interface IAddressSelectListProps {
  addresses: AddressesState;
  selectAddress: (address: Address) => void;
  selectedAddress: string;
}

const AddressSelectList = ({
  addresses,
  selectAddress,
  selectedAddress,
}: IAddressSelectListProps): JSX.Element => {
  const { data, isFetchCompleted, error, loading } = addresses;

  if (error && isFetchCompleted)
    return (
      <Alert severity="error" variant="outlined">
        {ERROR_MESSAGES.FETCH_ERROR}
      </Alert>
    );

  if (loading && !data.length)
    return (
      <>
        {[0, 1, 2, 3, 4, 5].map((val) => {
          return (
            <Fragment key={val}>
              <Box
                display="flex"
                bgcolor="white"
                alignItems="center"
                minHeight={[124, 124, 168]}
                px={[1, 2]}
                pt={1}
                pb={2}>
                <Skeleton variant="rect" width={130} height={130} />
                <Box p={2} width="100%">
                  <Skeleton width="80%">
                    <Typography variant="h4">.</Typography>
                  </Skeleton>
                  <Skeleton width="20%">
                    <Typography variant="h3">.</Typography>
                  </Skeleton>
                  <Skeleton width="50%" />
                  <Skeleton width="50%" />
                </Box>
              </Box>
              <Divider style={{ backgroundColor: '#eee' }} />
            </Fragment>
          );
        })}
      </>
    );

  if (!loading && !data.length)
    return (
      <Alert severity="info" variant="outlined">
        {EMPTY_MESSAGES.ADDRESSES}
      </Alert>
    );

  const isSelected = (address: Address): boolean => {
    return selectedAddress === address.id;
  };

  return (
    <Card>
      <Grid container>
        {addresses.data.map((address: Address) => {
          return (
            <Grid item xs={12} key={address.id}>
              <AddressSelectCard
                address={address}
                selectAddress={selectAddress}
                isSelected={isSelected(address)}
              />
            </Grid>
          );
        })}
      </Grid>
    </Card>
  );
};

export default AddressSelectList;
