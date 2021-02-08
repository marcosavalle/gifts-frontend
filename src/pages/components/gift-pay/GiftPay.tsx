import React from 'react';
import GiftPayContainer from '../../../features/gifts/components/gift-pay/GiftPayContainer';
import Layout from '../../../shared/components/layout/Layout';

const GiftPay = (): JSX.Element => {
  return (
    <Layout backRoute="/enviados">
      <GiftPayContainer />
    </Layout>
  );
};

export default GiftPay;
