/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  LinearProgress,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  Alert,
  Autocomplete,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from '@material-ui/lab';
import React from 'react';
import { ERROR_MESSAGES } from '../../../../core/constants/general-messages';
import {
  AddressForm as AddressFormData,
  AddressFormState,
  AddressFormErrors,
} from '../../models/address.model';
import { ProvincesState } from '../../../provinces/models/provinces.model';
import { LocalitiesState } from '../../../localities/models/localities.model';
import { Province } from '../../../provinces/models/province.model';
import { Locality } from '../../../localities/models/locality.model';

interface IAddressFormProps {
  storeData: {
    addressForm: AddressFormState;
    provinces: ProvincesState;
    localities: LocalitiesState;
  };
  formData: AddressFormData;
  formErrors: AddressFormErrors;
  handleFormData: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => void;
  handleCreate: () => void;
  goback: () => void;
  handleAutocompleteData: (name: string, value: string) => void;
  getLocalities: (provinceId: string) => void;
}

export const AddressForm = ({
  storeData,
  formData,
  formErrors,
  handleFormData,
  handleCreate,
  goback,
  handleAutocompleteData,
  getLocalities,
}: IAddressFormProps): JSX.Element => {
  const { loading, error, isSaveCompleted } = storeData.addressForm;
  const { data: provinces } = storeData.provinces;
  const { data: localities } = storeData.localities;

  const getLoader = () => {
    if (loading) return <LinearProgress color="secondary" />;
    return null;
  };

  const getError = () => {
    if (error && isSaveCompleted)
      return <Alert severity="error">{ERROR_MESSAGES.SAVE_ERROR}</Alert>;
    return null;
  };

  const handleConfirm = () => {
    handleCreate();
  };

  const handleCancel = () => {
    goback();
  };

  const setProvince = (value: Province) => {
    if (value) {
      handleAutocompleteData('localityId', '');
      handleAutocompleteData('province', value.id);
      getLocalities(value.id);
    }
  };

  const setLocality = (value: Locality) => {
    if (value) {
      handleAutocompleteData('localityId', value.id);
    }
  };

  return (
    <Container>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} md={8} className="form--container">
          <Typography variant="h5">Agregá un domicilio</Typography>
          <Typography variant="caption">(*) Campos obligatorios</Typography>
          <Card className="form--card">
            {getLoader()}
            {getError()}
            <form className="form--card-container" autoComplete="off">
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.name}>
                    <InputLabel color="secondary" htmlFor="address-name">
                      Nombre del domicilio *
                    </InputLabel>
                    <Input
                      id="address-name"
                      color="secondary"
                      name="name"
                      value={formData.name}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.name ? (
                      <FormHelperText>{formErrors.name}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.province}>
                    <Autocomplete
                      disabled={loading}
                      options={provinces}
                      getOptionLabel={(option: Province) => option.name}
                      disableClearable
                      onChange={(
                        event: React.ChangeEvent<unknown>,
                        value: Province | null,
                        reason: AutocompleteChangeReason,
                        details?:
                          | AutocompleteChangeDetails<Province>
                          | undefined
                      ) => {
                        setProvince(value as Province);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Provincia *"
                          style={{ width: '100%' }}
                          value={formData.province}
                          color="secondary"
                          error={!!formErrors.province}
                        />
                      )}
                    />
                    {formErrors.province ? (
                      <FormHelperText>{formErrors.province}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.localityId}>
                    <Autocomplete
                      disabled={
                        loading || !formData.province || !localities.length
                      }
                      options={localities}
                      getOptionLabel={(option: Locality) => option.name}
                      disableClearable
                      onChange={(
                        event: React.ChangeEvent<unknown>,
                        value: Locality | null,
                        reason: AutocompleteChangeReason,
                        details?:
                          | AutocompleteChangeDetails<Locality>
                          | undefined
                      ) => {
                        setLocality(value as Locality);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Localidad *"
                          style={{ width: '100%' }}
                          value={formData.localityId}
                          color="secondary"
                          error={!!formErrors.localityId}
                        />
                      )}
                    />
                    {formErrors.localityId ? (
                      <FormHelperText>{formErrors.localityId}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.street}>
                    <InputLabel color="secondary" htmlFor="street">
                      Calle *
                    </InputLabel>
                    <Input
                      id="street"
                      color="secondary"
                      name="street"
                      value={formData.street}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.street ? (
                      <FormHelperText>{formErrors.street}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.number}>
                    <InputLabel color="secondary" htmlFor="number">
                      Número *
                    </InputLabel>
                    <Input
                      id="number"
                      color="secondary"
                      name="number"
                      type="number"
                      value={formData.number}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.number ? (
                      <FormHelperText>{formErrors.number}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.apt}>
                    <InputLabel color="secondary" htmlFor="apt">
                      Piso / Dpto
                    </InputLabel>
                    <Input
                      id="apt"
                      color="secondary"
                      name="apt"
                      value={formData.apt}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.apt ? (
                      <FormHelperText>{formErrors.apt}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.postalCode}>
                    <InputLabel color="secondary" htmlFor="postal-code">
                      Código postal *
                    </InputLabel>
                    <Input
                      id="postal-code"
                      color="secondary"
                      name="postalCode"
                      type="number"
                      value={formData.postalCode}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.postalCode ? (
                      <FormHelperText>{formErrors.postalCode}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.contactPhone}>
                    <InputLabel color="secondary" htmlFor="contact-phone">
                      Teléfono de contacto
                    </InputLabel>
                    <Input
                      id="contact-phone"
                      color="secondary"
                      name="contactPhone"
                      type="number"
                      value={formData.contactPhone}
                      onChange={handleFormData}
                      disabled={loading}
                    />
                    {formErrors.contactPhone ? (
                      <FormHelperText>{formErrors.contactPhone}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <FormControl
                    fullWidth
                    margin="normal"
                    error={!!formErrors.description}>
                    <InputLabel color="secondary" htmlFor="description">
                      Descripción del domicilio
                    </InputLabel>
                    <Input
                      id="description"
                      color="secondary"
                      name="description"
                      value={formData.description}
                      onChange={handleFormData}
                      disabled={loading}
                      multiline
                    />
                    {formErrors.description ? (
                      <FormHelperText>{formErrors.description}</FormHelperText>
                    ) : null}
                  </FormControl>
                </Grid>
              </Grid>
            </form>
          </Card>
          <Box p={2}>
            <Button
              color="secondary"
              variant="contained"
              style={{
                textTransform: 'none',
                fontSize: '16px',
                marginRight: '20px',
              }}
              onClick={() => handleConfirm()}>
              Guardar
            </Button>
            <Button
              color="secondary"
              style={{ textTransform: 'none', fontSize: '16px' }}
              onClick={() => handleCancel()}>
              Cancelar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
