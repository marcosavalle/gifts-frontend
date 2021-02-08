import React from 'react';
import GiftSelectContainer from '../../../features/gifts/components/gift-select/GiftSelectContainer';
import Layout from '../../../shared/components/layout/Layout';

const GiftSelect = (): JSX.Element => {
  return (
    <Layout backRoute="/recibidos">
      <GiftSelectContainer />
    </Layout>
  );
};

export default GiftSelect;
