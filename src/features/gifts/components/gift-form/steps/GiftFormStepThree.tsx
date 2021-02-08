import {
  Avatar,
  Container,
  Grid,
  Typography,
  Card,
  LinearProgress,
  Box,
  Divider,
  Chip,
  Button,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';
import GiftBoxIcon from '@material-ui/icons/Redeem';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import {
  StepThreeForm,
  StepThreeErrors,
  StepThreeFormState,
} from '../../../models/gift-form-step-three.model';
import { CategoriesState } from '../../../../categories/models/categories.model';
import { GIFT_FORM } from '../../../../../core/constants/gift-form';
import { ERROR_MESSAGES } from '../../../../../core/constants/general-messages';

interface IStepThreeProps {
  storeData: {
    stepThreeForm: StepThreeFormState;
    categories: CategoriesState;
  };
  formData: StepThreeForm;
  formErrors: StepThreeErrors;
  handleView: (view: string) => void;
  deleteCategory: (meliId: string) => void;
  deleteProduct: (meliId: string) => void;
}

const elypsis = (text: string): string => `${text.substring(0, 12)}...`;

const GiftFormStepThree = ({
  storeData,
  formData,
  formErrors,
  handleView,
  deleteCategory,
  deleteProduct,
}: IStepThreeProps): JSX.Element => {
  const { loading, error, isSaveCompleted } = storeData.stepThreeForm;

  const getLoader = () => {
    if (loading) return <LinearProgress color="secondary" />;
    return null;
  };

  const getError = () => {
    if (error && isSaveCompleted)
      return <Alert severity="error">{ERROR_MESSAGES.SAVE_ERROR}</Alert>;
    return null;
  };

  const getSelectedCategories = () => {
    const { categories } = formData;

    if (categories.length) {
      return (
        <Box display="flex" flexWrap="wrap" mt={4}>
          {categories.map((category) => (
            <Chip
              key={category.meliId}
              label={category.name}
              size="small"
              variant="outlined"
              onDelete={() => deleteCategory(category.meliId)}
              color="secondary"
              className="selected--chip"
            />
          ))}
        </Box>
      );
    }

    return (
      <Box mt={4}>
        <Typography variant="caption">
          Aún no seleccionaste categorías.
        </Typography>
      </Box>
    );
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

    return (
      <Box mt={4}>
        <Typography variant="caption">
          Aún no seleccionaste productos.
        </Typography>
      </Box>
    );
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Box display="flex" alignItems="center">
            <GiftBoxIcon fontSize="large" style={{ marginRight: '8px' }} />
            <Typography variant="h5">Armá tu caja de regalos</Typography>
          </Box>
          <Box mt={2} mb={4}>
            {formErrors.error ? (
              <Alert severity="error" variant="outlined">
                {formErrors.error}
              </Alert>
            ) : (
              <Alert severity="info" variant="outlined">
                Podés seleccionar una o más categorías y/o uno o más productos
                para que elija quien reciba tu regalo.
              </Alert>
            )}
          </Box>
          <Card>
            {getLoader()}
            {getError()}
            <form className="form--card-container" autoComplete="off">
              <Box py={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <Typography variant="subtitle1">Categorías</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleView(GIFT_FORM.VIEWS.CATEGORIES_FORM)}
                    startIcon={
                      formData.categories.length ? (
                        <EditIcon fontSize="small" />
                      ) : (
                        <AddIcon fontSize="small" />
                      )
                    }>
                    {formData.categories.length ? 'Modificar' : 'Seleccionar'}
                  </Button>
                </Box>
                {getSelectedCategories()}
              </Box>
              <Divider />
              <Box py={2}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center">
                  <Typography variant="subtitle1">Productos</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={() => handleView(GIFT_FORM.VIEWS.PRODUCTS_FORM)}
                    startIcon={
                      formData.products.length ? (
                        <EditIcon fontSize="small" />
                      ) : (
                        <AddIcon fontSize="small" />
                      )
                    }>
                    {formData.products.length ? 'Modificar' : 'Seleccionar'}
                  </Button>
                </Box>
                {getSelectedProducts()}
              </Box>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftFormStepThree;
