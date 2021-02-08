import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import React, { FormEvent } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { GIFT_FORM } from '../../../../core/constants/gift-form';
import { FProduct, Product } from '../../models/product.model';
import { ProductsState } from '../../models/products.model';
import ProductsList from '../products-list/ProductsList';

interface IProductsFormProps {
  formData: { site: string; page: number; q: string; products: FProduct[] };
  storeData: { products: ProductsState };
  handleView: (view: string) => void;
  handleFormData: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  searchProducts: () => void;
  nextProductsPage: () => void;
  selectProduct: (product: Product) => void;
  deleteProduct: (meliId: string) => void;
}

const ProductsForm = ({
  handleFormData,
  handleView,
  searchProducts,
  nextProductsPage,
  selectProduct,
  deleteProduct,
  formData,
  storeData,
}: IProductsFormProps): JSX.Element => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.q) searchProducts();
  };

  const elypsis = (text: string): string => `${text.substring(0, 12)}...`;

  const hasMore = () => {
    if (storeData.products.data) {
      return (
        storeData.products.data?.results.length / formData.page === 50 &&
        !storeData.products.loading
      );
    }
    return false;
  };

  const getSelectedProducts = () => {
    const { products } = formData;

    if (products.length) {
      return (
        <Box display="flex" flexWrap="wrap" mt={2}>
          {products.map((product) => (
            <Chip
              key={product.meliId}
              label={elypsis(product.name)}
              avatar={<Avatar alt={product.name} src={product.picture} />}
              variant="outlined"
              onDelete={() => deleteProduct(product.meliId)}
              color="secondary"
              className="selected--chip"
            />
          ))}
        </Box>
      );
    }

    return null;
  };

  const scrollLoader = () => {
    return (
      <Box
        key={0}
        p={3}
        display="flex"
        flexDirection="column"
        alignItems="center">
        <CircularProgress color="secondary" style={{ marginBottom: '20px' }} />
        <Typography variant="caption" color="secondary">
          Buscando productos
        </Typography>
      </Box>
    );
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Seleccioná productos</Typography>
          <Button
            color="secondary"
            style={{ textTransform: 'none', fontSize: '16px' }}
            startIcon={<ArrowBackIcon />}
            onClick={() => handleView(GIFT_FORM.VIEWS.STEPS_FORM)}>
            ¡Listo! volver al formulario
          </Button>
          <form onSubmit={handleSubmit}>
            <Paper style={{ marginTop: '20px' }}>
              <Box display="flex" justifyContent="space-between" pl={2}>
                <InputBase
                  placeholder="Estoy buscando..."
                  autoFocus
                  fullWidth
                  name="inputSearch"
                  onChange={handleFormData}
                  value={formData.q}
                  autoComplete="off"
                />
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              </Box>
            </Paper>
          </form>
          {getSelectedProducts()}
          <InfiniteScroll
            loadMore={nextProductsPage}
            hasMore={hasMore()}
            loader={scrollLoader()}
            threshold={1000}>
            <Grid style={{ padding: '20px 0 10px' }}>
              <ProductsList
                productsSelected={formData.products}
                products={storeData.products}
                selectProduct={selectProduct}
              />
            </Grid>
          </InfiniteScroll>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsForm;
