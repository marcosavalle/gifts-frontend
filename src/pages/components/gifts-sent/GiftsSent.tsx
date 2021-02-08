import './GiftsSent.css';
import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Layout from '../../../shared/components/layout/Layout';
import GiftsSentContainer from '../../../features/gifts/components/gifts-sent/GiftsSentContainer';

const GiftsSent = (): JSX.Element => {
  return (
    <Layout>
      <Box>
        <GiftsSentContainer />
        <Box position="fixed" bottom={30} right={30}>
          <Link to="/enviados/nuevo">
            <Fab color="secondary">
              <AddIcon />
            </Fab>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default GiftsSent;
