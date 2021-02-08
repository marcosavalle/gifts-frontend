import { Box, CircularProgress } from '@material-ui/core';
import React from 'react';

const Loader = (): JSX.Element => {
  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center">
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default Loader;
