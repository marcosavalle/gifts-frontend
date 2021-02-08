import { Box } from '@material-ui/core';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '../../../shared/components/layout/Layout';
import GiftDetailsContainer from '../../../features/gifts/components/gift-details/GiftDetailsContainer';

const GiftById = (): JSX.Element => {
  const location = useLocation();

  let backRoute = '/';
  if (location.pathname.startsWith('/enviado')) backRoute = '/enviados';
  if (location.pathname.startsWith('/recibido')) backRoute = '/recibidos';

  return (
    <Layout backRoute={backRoute}>
      <Box>
        <GiftDetailsContainer />
      </Box>
    </Layout>
  );
};

export default GiftById;
