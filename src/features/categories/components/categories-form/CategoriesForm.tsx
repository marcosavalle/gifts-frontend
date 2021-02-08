import './CategoriesForm.css';
import { Button, Card, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { GIFT_FORM } from '../../../../core/constants/gift-form';
import { Category, CategoryState } from '../../models/category.model';
import { CategoriesState } from '../../models/categories.model';
import CategoriesFormList from './CategoriesFormList';

interface ICategoriesFormProps {
  storeData: {
    categories: CategoriesState;
    category: CategoryState;
  };
  formData: { categories: Category[]; categoryOpened: string };
  handleView: (view: string) => void;
  selectCategory: (category: Category) => void;
  openCategory: (id: string) => void;
}

const CategoriesForm = ({
  storeData,
  formData,
  handleView,
  selectCategory,
  openCategory,
}: ICategoriesFormProps): JSX.Element => {
  const isSelected = (category: Category): boolean => {
    return !!formData.categories.filter((c) => c.meliId === category.meliId)
      .length;
  };

  const isOpened = (meliId: string): boolean => {
    return formData.categoryOpened === meliId;
  };

  const selectedChildrens = (meliId: string): number => {
    return formData.categories.filter((c) => c.pathRoot[0].meliId === meliId)
      .length;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Seleccioná categorías</Typography>
          <Button
            color="secondary"
            style={{ textTransform: 'none', fontSize: '16px' }}
            startIcon={<ArrowBackIcon />}
            onClick={() => handleView(GIFT_FORM.VIEWS.STEPS_FORM)}>
            ¡Listo! volver al formulario
          </Button>
          <Card className="form--card">
            <CategoriesFormList
              categories={storeData.categories}
              selectedCategory={storeData.category}
              selectCategory={selectCategory}
              isSelected={isSelected}
              openCategory={openCategory}
              isOpened={isOpened}
              selectedChildrens={selectedChildrens}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CategoriesForm;
