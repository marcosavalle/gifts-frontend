import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Alert } from '@material-ui/lab';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';
import { GIFT_FORM } from '../../../../core/constants/gift-form';
import { FProduct } from '../../models/product.model';

interface IOutOfRangeProductsProps {
  productsSelected: FProduct[];
  maxAmount: number;
  handleView: (view: string) => void;
  deleteProduct: (meliId: string) => void;
}

const ProductsOutOfRange = ({
  productsSelected,
  maxAmount,
  handleView,
  deleteProduct,
}: IOutOfRangeProductsProps): JSX.Element => {
  const getSelectedProducts = () => {
    if (productsSelected.length) {
      return (
        <Grid container style={{ padding: '20px' }} spacing={1}>
          {productsSelected
            .filter((p) => p.price > maxAmount)
            .map((product) => (
              <Grid item xs={12} sm={6} key={product.meliId}>
                <Box
                  display="flex"
                  bgcolor="white"
                  alignItems="flex-start"
                  justifyContent="space-between">
                  <Box display="flex" alignItems="center" p={1}>
                    <Avatar
                      variant="square"
                      src={product.picture}
                      style={{ width: 70, height: 70 }}
                    />
                    <Box pl={[1, 2]}>
                      <Typography variant="caption" component="p">
                        {product.name}
                      </Typography>
                      <Typography variant="subtitle1" component="p">
                        $ {product.price}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton onClick={() => deleteProduct(product.meliId)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
                <Divider style={{ backgroundColor: '#eee' }} />
              </Grid>
            ))}
        </Grid>
      );
    }

    return null;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Eliminar productos</Typography>
          <Button
            color="secondary"
            style={{ textTransform: 'none', fontSize: '16px' }}
            startIcon={<ArrowBackIcon />}
            onClick={() => handleView(GIFT_FORM.VIEWS.STEPS_FORM)}>
            ¡Listo! volver al formulario
          </Button>
          <Box my={2}>
            <Alert severity="error" variant="outlined">
              {ERROR_MESSAGES.OUT_OF_RANGE_PRODUCTS}
            </Alert>
          </Box>
          <Box mt={2}>
            <Typography variant="subtitle1">
              Tu presupuesto máximo: $ {maxAmount}
            </Typography>
          </Box>
          {getSelectedProducts()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductsOutOfRange;
