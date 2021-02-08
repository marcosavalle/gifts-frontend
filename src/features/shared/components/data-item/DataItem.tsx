import React from 'react';
import { Grid, Typography, Box, Divider } from '@material-ui/core';

interface IDataItemProps {
  propertyName: string;
  value: string;
}

export const DataItem = ({
  propertyName,
  value,
}: IDataItemProps): JSX.Element => {
  return (
    <>
      <Box py={[1, 2]} px={2}>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1">{propertyName}</Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography
              variant="body1"
              style={{ color: '#999', wordWrap: 'break-word' }}>
              {value}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider style={{ backgroundColor: '#eee' }} />
    </>
  );
};
