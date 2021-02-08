import { Box, Checkbox, Divider, Typography } from '@material-ui/core';
import React from 'react';
import { Address } from '../../models/address.model';

interface IAddressSelectCardProps {
  address: Address;
  selectAddress: (address: Address) => void;
  isSelected: boolean;
}

const AddressSelectCard = ({
  address,
  selectAddress,
  isSelected,
}: IAddressSelectCardProps): JSX.Element => {
  return (
    <>
      <Box
        display="flex"
        bgcolor="white"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={2}>
        <Box>
          <Box py={1}>
            <Typography variant="body1">{address.name}</Typography>
          </Box>
          <Box style={{ color: '#999' }}>
            <Typography variant="body2">
              {address.street} {address.number} {address.apt}
            </Typography>
            <Typography variant="body2">
              {address.locality}, {address.province} ({address.postalCode})
            </Typography>
            <Typography variant="body2">{address.contactPhone}</Typography>
            <Typography variant="body2">{address.description}</Typography>
          </Box>
        </Box>
        <Checkbox
          style={{ padding: 0, margin: 0 }}
          onChange={() => selectAddress(address)}
          checked={isSelected}
        />
      </Box>
      <Divider style={{ backgroundColor: '#eee' }} />
    </>
  );
};

export default AddressSelectCard;
