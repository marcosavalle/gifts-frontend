import {
  Box,
  Card,
  Divider,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@material-ui/core';
import React, { useState } from 'react';
import moment from 'moment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShippingIcon from '@material-ui/icons/LocalShipping';
import ErrorIcon from '@material-ui/icons/Error';
import Fade from '@material-ui/core/Fade';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Gift } from '../../models/gift.model';
import './GiftCard.css';
import {
  getCardInfo,
  GiftMenuScope,
} from '../../../../core/constants/gift-status-data';
import { AuthService } from '../../../../core/services/auth.service';

interface GiftCardProps {
  gift: Gift;
  handleResetGift?: (id: string) => void;
  handleCancelGift: (id: string) => void;
}

const ITEM_HEIGHT = 50;

const GiftCard = ({
  gift,
  handleResetGift,
  handleCancelGift,
}: GiftCardProps): JSX.Element => {
  const [
    resetGiftModalVisibility,
    setResetGiftModalVisibility,
  ] = useState<boolean>(false);
  const [
    cancelGiftModalVisibility,
    setCancelGiftModalVisibility,
  ] = useState<boolean>(false);

  const {
    id,
    senderName,
    receiverName,
    status,
    createdDate,
    productFilter,
    type,
    reason,
    userSender,
  } = gift;

  const location = useLocation();

  let detailRoute = '/';
  if (location.pathname.startsWith('/enviados')) detailRoute = '/enviado';
  if (location.pathname.startsWith('/recibidos')) detailRoute = '/recibido';

  const userData = AuthService.getUserData();
  const userScope =
    userSender.id === userData?.id
      ? GiftMenuScope.SENDER
      : GiftMenuScope.RECEIVER;
  const statusData = getCardInfo(gift.status.id, userScope);

  const useStyles = makeStyles((theme) => ({
    status: {
      fontWeight: 600,
      backgroundColor: statusData.bgColor,
      color: statusData.textColor,
      padding: '5px',
      borderRadius: '5px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
    },
    date: {
      fontWeight: 500,
      color: '#999',
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '14px',
      },
    },
    divider: {
      backgroundColor: '#eee',
      margin: '10px 0',
    },
    footer: {
      fontWeight: 400,
      color: '#666',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '16px',
      },
    },
  }));

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory();

  const handleClickAction = (action: string) => {
    setAnchorEl(null);
    switch (action) {
      case 'goDetail':
        return history.push(`${detailRoute}/${gift.id}`);

      case 'selectGift':
        return history.push(`/seleccionar/${gift.id}`);

      case 'payGift':
        return history.push(`/pagar/${gift.id}`);

      case 'resetGift':
        return setResetGiftModalVisibility(true);

      case 'shareGift':
        return history.push(`/compartir/${gift.id}`);

      case 'cancelGift':
        return setCancelGiftModalVisibility(true);

      default:
        return null;
    }
  };

  const cancelGiftModal = () => {
    const handleCloseCancel = () => {
      return setCancelGiftModalVisibility(false);
    };

    const handleCloseConfirm = () => {
      handleCancelGift(id);
      return setCancelGiftModalVisibility(false);
    };
    return (
      <Dialog
        open={cancelGiftModalVisibility}
        onClose={handleCloseCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          ¿Está seguro de que desea cancelar este regalo?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Cancelar este regalo implica perder todo el progreso realizado hasta
            ahora en el mismo.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleCloseConfirm} color="secondary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const resetGiftModal = () => {
    const handleCloseCancel = () => {
      return setResetGiftModalVisibility(false);
    };

    const handleCloseConfirm = () => {
      if (typeof handleResetGift === 'function') {
        handleResetGift(id);
      }
      return setResetGiftModalVisibility(false);
    };
    return (
      <Dialog
        open={resetGiftModalVisibility}
        onClose={handleCloseCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          ¿Está seguro de que desea reiniciar este regalo?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Al realizar esta acción, se descartarán las selecciones realizadas
            por el receptor actual y será posible enviarle el link a otra
            persona.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCancel} color="secondary">
            Cancelar
          </Button>
          <Button onClick={handleCloseConfirm} color="secondary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <Card style={{ marginBottom: '15px' }}>
      {resetGiftModal()}
      {cancelGiftModal()}
      <Box
        display="flex"
        px={[1, 2]}
        pt={1}
        justifyContent="space-between"
        alignItems="center">
        <Box display="flex" alignItems="center">
          <Box className={classes.status} mr={[2, 3]}>
            {status.name}
          </Box>
          <Box className={classes.date}>
            {moment(createdDate, 'x').format('D [de] MMMM YYYY')}
          </Box>
        </Box>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}>
          <MoreVertIcon style={{ color: 'black' }} />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}>
          {statusData.menuOptions.map((option) => (
            <MenuItem
              key={option.action}
              onClick={() => handleClickAction(option.action)}>
              {option.text}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Link to={`${detailRoute}/${id}`}>
        <Box p={[1, 2]}>
          <Typography variant="subtitle1">
            De {senderName} para {receiverName}
          </Typography>
          {productFilter ? (
            <Typography variant="body1">
              Presupuesto ${' '}
              {Number(productFilter.maxAmount).toLocaleString('de-DE')}
            </Typography>
          ) : null}
          {type && reason ? (
            <>
              <Divider className={classes.divider} />
              <Box
                display="flex"
                alignItems="center"
                className={classes.footer}>
                <Box display="flex" mr={[2, 3]} alignItems="center">
                  <ShippingIcon style={{ marginRight: 5 }} />
                  <p>{type}</p>
                </Box>
                <Box display="flex" alignItems="center">
                  <ErrorIcon style={{ marginRight: 5 }} />
                  <p>{reason}</p>
                </Box>
              </Box>
            </>
          ) : null}
        </Box>
      </Link>
    </Card>
  );
};

GiftCard.defaultProps = {
  handleResetGift: null,
};

export default GiftCard;
