import {
  Container,
  Grid,
  Typography,
  Card,
  Box,
  Divider,
  Chip,
  Avatar,
  CircularProgress,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { ERROR_MESSAGES } from '../../../../../core/constants/general-messages';
import { GiftReason } from '../../../../gift-reasons/models/gift-reason.model';
import { GiftType } from '../../../../gift-types/models/gift-type.model';
import { StepFourFormState } from '../../../models/gift-form-step-four.model';
import { StepOneForm } from '../../../models/gift-form-step-one.model';
import { StepThreeForm } from '../../../models/gift-form-step-three.model';
import { StepTwoForm } from '../../../models/gift-form-step-two.model';
import { DataItem } from '../../../../shared/components/data-item/DataItem';

interface IStepFourProps {
  storeData: {
    stepFourForm: StepFourFormState;
    giftTypes: GiftType[];
    giftReasons: GiftReason[];
  };
  formData: {
    stepOne: StepOneForm;
    stepTwo: StepTwoForm;
    stepThree: StepThreeForm;
  };
}

const GiftFormStepFour = ({
  storeData,
  formData,
}: IStepFourProps): JSX.Element => {
  const { loading, error, isSaveCompleted } = storeData.stepFourForm;

  const { senderName, receiverName } = formData.stepOne;
  const { typeId, reasonId, maxAmount } = formData.stepTwo;
  const giftType = storeData.giftTypes.filter((type) => type.id === typeId);
  const type = giftType.length ? giftType[0].name : 'Tipo de regalo';
  const giftReason = storeData.giftReasons.filter(
    (reason) => reason.id === reasonId
  );
  const reason = giftReason.length ? giftReason[0].name : 'Razón del regalo';

  const { categories, products } = formData.stepThree;

  const getLoader = () => {
    if (loading)
      return (
        <Box display="flex" my={2} justifyContent="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Box>
      );
    return null;
  };

  const getError = () => {
    if (error && isSaveCompleted)
      return (
        <Alert severity="error" style={{ margin: '20px 0 10px' }}>
          {ERROR_MESSAGES.SAVE_ERROR}
        </Alert>
      );
    return null;
  };

  const getCategories = () => {
    if (categories.length) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">
              Categorías seleccionadas
            </Typography>
          </Box>
          <Card>
            <Box display="flex" flexWrap="wrap" py={[1, 2]} px={2}>
              {categories.map((category) => (
                <Chip
                  key={category.meliId}
                  label={category.name}
                  variant="outlined"
                  color="secondary"
                  className="selected--chip"
                />
              ))}
            </Box>
          </Card>
        </>
      );
    }
    return null;
  };

  const getProducts = () => {
    if (products.length) {
      return (
        <>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Productos seleccionados</Typography>
          </Box>
          <Grid container style={{ padding: '10px 0' }} spacing={1}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} key={product.meliId}>
                <Box bgcolor="white">
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
                </Box>
                <Divider style={{ backgroundColor: '#eee' }} />
              </Grid>
            ))}
          </Grid>
        </>
      );
    }
    return null;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Resumen del regalo</Typography>
          {getError()}
          <Box py={2}>
            <Typography variant="subtitle1">¿De quién y para quién?</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="De" value={senderName} />
              <DataItem propertyName="Para" value={receiverName} />
            </Box>
          </Card>
          <Box pt={4} pb={2}>
            <Typography variant="subtitle1">Datos del regalo</Typography>
          </Box>
          <Card>
            <Box>
              <DataItem propertyName="Tipo de entrega" value={type} />
              <DataItem propertyName="Motivo del regalo" value={reason} />
              <DataItem
                propertyName="Presupuesto máximo"
                value={`$ ${Number(maxAmount).toLocaleString('de-DE')}`}
              />
            </Box>
          </Card>
          {getCategories()}
          {getProducts()}
          {getLoader()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftFormStepFour;
