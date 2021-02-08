import React, { useEffect } from 'react';
import './Home.css';
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  Chip,
} from '@material-ui/core';
import { Rating, Skeleton } from '@material-ui/lab';
import Layout from '../../../shared/components/layout/Layout';
import GiftReceivedWidget from '../gift-received-widget/GiftReceivedWidget';
import { LS_GIFT_RECEIVED_PENDING } from '../../../core/constants';
import { GiftReceiveData } from '../../../features/gifts/models/gift-accept.model';
import { IHomeReduxActions, IHomeReduxProps } from './HomeContainer';
import { MostChosenState } from '../../../features/most-chosen/models/most-chosen.model';
import CarouselMeli from '../../../features/carousel/components/Carousel';

type IHomeProps = IHomeReduxProps & IHomeReduxActions;

function Home({
  giftAccept,
  acceptGift,
  getMostChosenProductsSender,
  getMostChosenProductsReceiver,
  getMostChosenCategoriesReceiver,
  getMostChosenCategoriesSender,
  mostChosenCategoriesReceiver,
  mostChosenCategoriesSender,
  mostChosenProductsReceiver,
  mostChosenProductsSender,
}: IHomeProps): JSX.Element {
  useEffect(() => {
    getMostChosenProductsSender();
    getMostChosenProductsReceiver();
    getMostChosenCategoriesReceiver();
    getMostChosenCategoriesSender();
  }, [
    getMostChosenProductsSender,
    getMostChosenProductsReceiver,
    getMostChosenCategoriesReceiver,
    getMostChosenCategoriesSender,
  ]);

  if (
    mostChosenCategoriesReceiver.loading ||
    mostChosenCategoriesSender.loading ||
    mostChosenProductsReceiver.loading ||
    mostChosenProductsSender.loading
  )
    return (
      <Layout>
        <Skeleton variant="rect" width="100%" height={400} />
        <Container maxWidth={false} style={{ marginBottom: '100px' }}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Skeleton width="25%">
                <Typography variant="h2">.</Typography>
              </Skeleton>
              <Grid container justify="center" spacing={2}>
                {[0, 1, 2, 3].map((n) => (
                  <Grid item xs={12} sm={3} key={n}>
                    <Card style={{ height: '240px' }}>
                      <Box
                        display="flex"
                        height="100%"
                        px={[1, 2]}
                        alignItems="center"
                        alignContent="center">
                        <Skeleton variant="rect" width={130} height={130} />

                        <Box p={2} width="100%">
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Skeleton width="25%">
                <Typography variant="h2">.</Typography>
              </Skeleton>
              <Grid container justify="center" spacing={2}>
                {[0, 1, 2, 3].map((n) => (
                  <Grid item xs={12} sm={3} key={n}>
                    <Card style={{ height: '240px' }}>
                      <Box
                        display="flex"
                        height="100%"
                        px={[1, 2]}
                        alignItems="center"
                        alignContent="center">
                        <Skeleton variant="rect" width={130} height={130} />

                        <Box p={2} width="100%">
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                          <Skeleton animation="wave" height={20} width="80%" />
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Layout>
    );

  const getPendingGiftReceived = () => {
    const gr = localStorage.getItem(LS_GIFT_RECEIVED_PENDING);
    if (gr) {
      const giftData = JSON.parse(atob(gr)) as GiftReceiveData;
      return (
        <Box mt={4} pb={2}>
          <GiftReceivedWidget
            giftData={giftData}
            storeData={giftAccept}
            acceptGift={acceptGift}
          />
        </Box>
      );
    }
    return null;
  };

  const getThumbnail = (img: string) => {
    return img.replace('-I.jpg', '-O.jpg');
  };

  const showMostChosenProducts = (
    mostChosenProducts: MostChosenState,
    title: string,
    label: string
  ) => {
    if (!mostChosenProducts.data.length) return null;

    const cardWidth = () => {
      const q = mostChosenProducts.data.length;
      if (q === 2) return 6;
      if (q === 3) return 4;
      if (q === 4) return 3;

      return 12;
    };

    const col = cardWidth();

    return (
      <>
        <Box
          my={4}
          style={{ color: '#666', fontWeight: 300, fontSize: '26px' }}>
          {title}
        </Box>
        <Grid container justify="center" spacing={2}>
          {mostChosenProducts.data.map((product, index) => (
            <Grid item xs={12} sm={6} lg={col} key={product.meliId}>
              <Card style={{ height: '240px' }}>
                {index === 0 ? (
                  <Box p={1} style={{ position: 'absolute' }}>
                    <Chip color="secondary" label={label} size="small" />
                  </Box>
                ) : null}

                <Box
                  display="flex"
                  height="100%"
                  px={[1, 2]}
                  alignItems="center"
                  alignContent="center">
                  <Box
                    minWidth={[120, 130, 160]}
                    maxWidth={[120, 130, 160]}
                    minHeight={[120, 130, 160]}
                    maxHeight={[120, 130, 160]}
                    style={{
                      backgroundImage: `url(${getThumbnail(product.image)})`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center center',
                      backgroundSize: 'contain',
                    }}
                  />

                  <Box p={2}>
                    <Box mb={2}>{product.name}</Box>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.rating}
                      precision={0.1}
                      readOnly
                    />
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  const showMostChosenCategories = (
    mostChosenCategories: MostChosenState,
    title: string
  ) => {
    if (!mostChosenCategories.data.length) return null;

    return (
      <>
        <Box
          my={4}
          style={{ color: '#666', fontWeight: 300, fontSize: '26px' }}>
          {title}
        </Box>
        <Grid
          container
          wrap="nowrap"
          justify="flex-start"
          spacing={2}
          style={{ overflowX: 'auto' }}>
          {mostChosenCategories.data.map((category, index) => (
            <Grid item key={category.meliId}>
              <Box
                borderRadius="50%"
                width="120px"
                height="120px"
                border="2px solid #3483fa"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                bgcolor={
                  index === 0 ? 'rgba(52, 131, 250, 0.1)' : 'transparent'
                }
                p={2}>
                <Typography variant="subtitle2" color="secondary">
                  {category.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  return (
    <Layout>
      <CarouselMeli />

      <Container maxWidth={false} style={{ marginBottom: '100px' }}>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} md={10}>
            {getPendingGiftReceived()}
            {showMostChosenProducts(
              mostChosenProductsSender,
              'Productos más sugeridos',
              'Más sugerido'
            )}
            {showMostChosenCategories(
              mostChosenCategoriesSender,
              'Categorías más sugeridas'
            )}
            {showMostChosenProducts(
              mostChosenProductsReceiver,
              'Productos más elegidos',
              'Más elegido'
            )}
            {showMostChosenCategories(
              mostChosenCategoriesReceiver,
              'Categorías más elegidas'
            )}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Home;
