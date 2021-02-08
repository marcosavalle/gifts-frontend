import './NotFound.css';
import React from 'react';
import { Container, Box, Button, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import SadIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import Layout from '../../../shared/components/layout/Layout';

const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <Container style={{ padding: 0 }} maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          height="100%"
          py={10}>
          <SadIcon color="secondary" style={{ fontSize: 100 }} />
          <Typography variant="h3">404</Typography>
          <Typography variant="h6">
            Oops! La pagina que buscas no existe.
          </Typography>
        </Box>
        <Box my={3} display="flex" justifyContent="center">
          <Link to="/">
            <Button
              color="secondary"
              style={{ textTransform: 'none', fontSize: '16px' }}
              startIcon={<ArrowBackIcon />}>
              Volver a la página principal
            </Button>
          </Link>
        </Box>
      </Container>
    </Layout>
  );
};

export default NotFound;
