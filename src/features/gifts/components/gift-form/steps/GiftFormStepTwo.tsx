import {
  Container,
  Grid,
  Typography,
  Card,
  FormControl,
  InputLabel,
  Input,
  LinearProgress,
  FormHelperText,
  Select,
  MenuItem,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { ERROR_MESSAGES } from '../../../../../core/constants/general-messages';
import { GiftReasonState } from '../../../../gift-reasons/models/gift-reason.model';
import { GiftTypeState } from '../../../../gift-types/models/gift-type.model';
import {
  StepTwoErrors,
  StepTwoForm,
  StepTwoFormState,
} from '../../../models/gift-form-step-two.model';

interface IStepTwoProps {
  storeData: {
    stepTwoForm: StepTwoFormState;
    giftTypes: GiftTypeState;
    giftReasons: GiftReasonState;
  };
  formData: StepTwoForm;
  formErrors: StepTwoErrors;
  handleFormData: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
}

const GiftFormStepTwo = ({
  storeData,
  formData,
  formErrors,
  handleFormData,
}: IStepTwoProps): JSX.Element => {
  const { loading, error, isSaveCompleted } = storeData.stepTwoForm;
  const { data: giftTypes } = storeData.giftTypes;
  const { data: giftReasons } = storeData.giftReasons;

  const getLoader = () => {
    if (loading) return <LinearProgress color="secondary" />;
    return null;
  };

  const getError = () => {
    if (error && isSaveCompleted)
      return <Alert severity="error">{ERROR_MESSAGES.SAVE_ERROR}</Alert>;
    return null;
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Datos del regalo</Typography>
          <Typography variant="caption">(*) Campos obligatorios</Typography>
          <Alert
            severity="info"
            variant="outlined"
            style={{ marginTop: '20px' }}>
            Tipo de entrega Remoto: enviamos el regalo al domicilio del
            receptor. Presencial: lo llevamos a tu domicilio para que lo
            entregues personalmente.
          </Alert>
          <Card className="form--card">
            {getLoader()}
            {getError()}
            <form className="form--card-container" autoComplete="off">
              <FormControl
                fullWidth
                margin="normal"
                error={!!formErrors.typeId}>
                <InputLabel color="secondary" htmlFor="gift-type">
                  Tipo de entrega *
                </InputLabel>
                <Select
                  name="typeId"
                  color="secondary"
                  id="gift-type"
                  value={formData.typeId}
                  onChange={handleFormData}
                  disabled={loading}>
                  {giftTypes.map((type) => (
                    <MenuItem value={type.id} key={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.typeId ? (
                  <FormHelperText>{formErrors.typeId}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={!!formErrors.reasonId}>
                <InputLabel color="secondary" htmlFor="gift-reason">
                  Motivo del regalo *
                </InputLabel>
                <Select
                  name="reasonId"
                  color="secondary"
                  id="gift-reason"
                  value={formData.reasonId}
                  onChange={handleFormData}
                  disabled={loading}>
                  {giftReasons.map((reason) => (
                    <MenuItem value={reason.id} key={reason.id}>
                      {reason.name}
                    </MenuItem>
                  ))}
                </Select>
                {formErrors.reasonId ? (
                  <FormHelperText>{formErrors.reasonId}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={!!formErrors.maxAmount}>
                <InputLabel color="secondary" htmlFor="max-amount">
                  Presupuesto máximo *
                </InputLabel>
                <Input
                  id="max-amount"
                  color="secondary"
                  name="maxAmount"
                  type="number"
                  value={formData.maxAmount}
                  onChange={handleFormData}
                  disabled={loading}
                />
                <FormHelperText>
                  {formErrors.maxAmount
                    ? formErrors.maxAmount
                    : 'Mínimo 500 / Máximo 100.000'}
                </FormHelperText>
              </FormControl>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftFormStepTwo;
