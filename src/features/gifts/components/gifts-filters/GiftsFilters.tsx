import React, { useState } from 'react';
import './GiftsFilters.css';
import MomentUtils from '@date-io/moment';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Slide,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { TransitionProps } from '@material-ui/core/transitions';
import TuneIcon from '@material-ui/icons/Tune';
import moment from 'moment';
import { GiftsFilters as GiftsFiltersType } from '../../models/gift.model';
import { Status, StatusState } from '../../../status/models/status.model';

interface IGiftsFiltersProps {
  filters: GiftsFiltersType;
  status: StatusState;
  handleFromDate: (date: MaterialUiPickersDate) => void;
  handleToDate: (date: MaterialUiPickersDate) => void;
  handleStatusChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getGifts: (filters: GiftsFiltersType) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps,
  ref: React.Ref<unknown>
) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Slide direction="up" ref={ref} {...props} />;
});

const GiftsFilters = ({
  filters,
  status,
  handleFromDate,
  handleToDate,
  handleStatusChange,
  getGifts,
}: IGiftsFiltersProps): JSX.Element => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleApply = () => {
    getGifts(filters);
    setOpenDialog(false);
  };

  return (
    <>
      <Button
        color="secondary"
        style={{ textTransform: 'none', fontSize: '16px' }}
        startIcon={<TuneIcon />}
        onClick={handleClickOpen}>
        Buscar
      </Button>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleClose}
        TransitionComponent={Transition}>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" style={{ flex: 1 }}>
              Buscar
            </Typography>
            <Button autoFocus color="inherit" onClick={handleApply}>
              Aplicar
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <MuiPickersUtilsProvider utils={MomentUtils} locale="es">
              <Grid container justify="center">
                <Grid item xs={12} sm={6} style={{ padding: '0 20px' }}>
                  <KeyboardDatePicker
                    color="secondary"
                    fullWidth
                    margin="normal"
                    label="Fecha desde"
                    format="DD-MM-yyyy"
                    value={filters.fromDate}
                    onChange={handleFromDate}
                    maxDate={filters.toDate}
                  />
                </Grid>
                <Grid item xs={12} sm={6} style={{ padding: '0 20px' }}>
                  <KeyboardDatePicker
                    color="secondary"
                    fullWidth
                    margin="normal"
                    label="Fecha hasta"
                    format="DD-MM-yyyy"
                    value={filters.toDate}
                    onChange={handleToDate}
                    minDate={filters.fromDate}
                    maxDate={moment()}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{ padding: '0 20px', margin: '30px 0' }}>
                  <FormControl component="fieldset" color="secondary">
                    <FormLabel component="legend">Estado del regalo</FormLabel>
                    <RadioGroup
                      value={filters.statusId}
                      onChange={handleStatusChange}>
                      <Box display="flex" flexWrap="wrap">
                        <FormControlLabel
                          value=""
                          control={<Radio />}
                          label="Todos los estados"
                          style={{ margin: '10px 30px 10px 0' }}
                        />
                        {status.data.map(({ id, name }: Status) => (
                          <FormControlLabel
                            key={id}
                            value={id}
                            control={<Radio />}
                            label={name}
                            style={{ margin: '10px 30px 10px 0' }}
                          />
                        ))}
                      </Box>
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default GiftsFilters;
