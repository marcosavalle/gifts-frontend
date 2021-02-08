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
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React from 'react';
import { ERROR_MESSAGES } from '../../../../../core/constants/general-messages';
import {
  StepOneErrors,
  StepOneForm,
  StepOneFormState,
} from '../../../models/gift-form-step-one.model';

interface IStepOneProps {
  storeData: {
    stepOneForm: StepOneFormState;
  };
  formData: StepOneForm;
  formErrors: StepOneErrors;
  handleFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const GiftFormStepOne = ({
  storeData,
  formData,
  formErrors,
  handleFormData,
}: IStepOneProps): JSX.Element => {
  const { loading, error, isSaveCompleted } = storeData.stepOneForm;

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
          <Typography variant="h5">¿De quién y para quién?</Typography>
          <Typography variant="caption">(*) Campos obligatorios</Typography>
          <Card className="form--card">
            {getLoader()}
            {getError()}
            <form className="form--card-container" autoComplete="off">
              <FormControl
                fullWidth
                margin="normal"
                error={!!formErrors.senderName}>
                <InputLabel color="secondary" htmlFor="sender-name">
                  Tu nombre o apodo *
                </InputLabel>
                <Input
                  id="sender-name"
                  color="secondary"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleFormData}
                  disabled={loading}
                />
                {formErrors.senderName ? (
                  <FormHelperText>{formErrors.senderName}</FormHelperText>
                ) : null}
              </FormControl>
              <FormControl
                fullWidth
                margin="normal"
                error={!!formErrors.receiverName}>
                <InputLabel color="secondary" htmlFor="receiver-name">
                  ¿A quién le vas a regalar? *
                </InputLabel>
                <Input
                  id="receiver-name"
                  color="secondary"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleFormData}
                  disabled={loading}
                />
                {formErrors.receiverName ? (
                  <FormHelperText>{formErrors.receiverName}</FormHelperText>
                ) : null}
              </FormControl>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GiftFormStepOne;
