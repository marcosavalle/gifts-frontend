import './GiftsReceived.css';
import React from 'react';
import Layout from '../../../shared/components/layout/Layout';
import GiftsReceivedContainer from '../../../features/gifts/components/gifts-received/GiftsReceivedContainer';

const GiftsReceived = (): JSX.Element => {
  return (
    <Layout>
      <GiftsReceivedContainer />
    </Layout>
  );
};

export default GiftsReceived;
