import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import React, { Fragment } from 'react';
import currency from 'currency.js';
import {
  EMPTY_MESSAGES,
  ERROR_MESSAGES,
} from '../../../../core/constants/general-messages';
import { FProduct, Product } from '../../models/product.model';
import { ProductsState } from '../../models/products.model';
import ProductCard from '../product-card/ProductCard';

interface IProductsSelectListProps {
  products: ProductsState;
  selectProduct: (product: Product) => void;
  productsSelected: FProduct[];
  selectedAmount: number;
  maxAmount: number;
}

const ProductsSelectList = ({
  products,
  selectProduct,
  productsSelected,
  selectedAmount,
  maxAmount,
}: IProductsSelectListProps): JSX.Element => {
  const isSelected = (product: Product): boolean => {
    return !!productsSelected.filter((p) => p.meliId === product.id).length;
  };

  const isEnabled = (product: Product): boolean => {
    return Number(currency(product.price).add(selectedAmount)) <= maxAmount;
  };

  if (products.error)
    return (
      <Alert severity="error" variant="outlined">
        {ERROR_MESSAGES.FETCH_ERROR}
      </Alert>
    );

  if (products.loading && !products.data?.results.length)
    return (
      <>
        {[0, 1, 2, 3, 4, 5].map((val) => {
          return (
            <Fragment key={val}>
              <Box
                display="flex"
                bgcolor="white"
                alignItems="center"
                minHeight={[124, 124, 168]}
                px={[1, 2]}
                pt={1}
                pb={2}>
                <Skeleton variant="rect" width={130} height={130} />
                <Box p={2} width="100%">
                  <Skeleton width="80%">
                    <Typography variant="h4">.</Typography>
                  </Skeleton>
                  <Skeleton width="20%">
                    <Typography variant="h3">.</Typography>
                  </Skeleton>
                  <Skeleton width="50%" />
                  <Skeleton width="50%" />
                </Box>
              </Box>
              <Divider style={{ backgroundColor: '#eee' }} />
            </Fragment>
          );
        })}
      </>
    );

  if (!products.data?.results.length && products.isFetchCompleted)
    return (
      <Alert severity="info" variant="outlined">
        {EMPTY_MESSAGES.PRODUCTS}
      </Alert>
    );

  const getProducts = () => {
    return products.data?.results.map((product: Product) => {
      return (
        <Grid item xs={12} key={product.id}>
          <ProductCard
            product={product}
            selectProduct={selectProduct}
            isSelected={isSelected}
            isEnabled={isEnabled}
          />
        </Grid>
      );
    });
  };
  return <Grid container>{getProducts()}</Grid>;
};

function areEqual(
  prevProps: IProductsSelectListProps,
  nextProps: IProductsSelectListProps
) {
  return (
    prevProps.products.data?.results === nextProps.products.data?.results &&
    prevProps.products.error === nextProps.products.error &&
    prevProps.products.loading === nextProps.products.loading &&
    prevProps.products.isFetchCompleted ===
      nextProps.products.isFetchCompleted &&
    prevProps.productsSelected === nextProps.productsSelected &&
    prevProps.selectedAmount === nextProps.selectedAmount
  );
}

export default React.memo(ProductsSelectList, areEqual);
