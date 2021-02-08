import './NewGift.css';
import React from 'react';
import Layout from '../../../shared/components/layout/Layout';
import GiftFormContainer from '../../../features/gifts/components/gift-form/GiftFormContainer';

const NewGift = (): JSX.Element => {
  return (
    <Layout backRoute="/enviados">
      <GiftFormContainer />
    </Layout>
  );
};

export default NewGift;
