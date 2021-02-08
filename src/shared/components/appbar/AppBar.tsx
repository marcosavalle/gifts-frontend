import './AppBar.css';
import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import NotificationsIcon from '@material-ui/icons/NotificationsNoneOutlined';
import GiftBoxIcon from '@material-ui/icons/Redeem';
import { useLocation, Link } from 'react-router-dom';
import meliLogo from '../../../resources/images/logo_icon.png';

interface IAppBarProps {
  handleOpenMenu: (open: boolean) => void;
  backRoute: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

const MeliAppBar = ({
  handleOpenMenu,
  backRoute,
}: IAppBarProps): JSX.Element => {
  const classes = useStyles();
  const location = useLocation();

  const icon = () => {
    if (location.pathname === '/') {
      return (
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          onClick={() => handleOpenMenu(true)}>
          <MenuIcon />
        </IconButton>
      );
    }
    return (
      <Link to={backRoute}>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <ArrowBackIcon />
        </IconButton>
      </Link>
    );
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {icon()}
          <img src={meliLogo} alt="Meli logo" className="appbar--logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MeliAppBar;
