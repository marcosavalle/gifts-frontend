import './Layout.css';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../menu/Menu';
import MeliAppBar from '../appbar/AppBar';
import { AuthService } from '../../../core/services/auth.service';
import { UserData } from '../../../core/models/user-data.model';
import { CLIENT_BASE_URL, LOGIN_ENDPOINT } from '../../../core/constants';

interface ILayoutProps {
  children: React.ReactNode;
  backRoute?: string;
}

const Layout = ({ children, backRoute }: ILayoutProps): JSX.Element => {
  const location = useLocation();
  const [state, setState] = React.useState({
    open: false,
  });

  const handleOpenMenu = (open: boolean) => {
    setState({ ...state, open });
  };

  if (location.search) {
    const params = new URLSearchParams(location.search);
    const token = params.get('token') || '';

    if (token) {
      AuthService.setUserData(location.search);
      window.location.href = CLIENT_BASE_URL || '';
    }
  }

  const userData: UserData | null = AuthService.getUserData();
  if (!userData) window.location.href = LOGIN_ENDPOINT || '';

  return (
    <div>
      <Menu
        userData={userData || null}
        openMenu={state.open}
        handleOpenMenu={handleOpenMenu}
      />
      <MeliAppBar
        handleOpenMenu={handleOpenMenu}
        backRoute={backRoute as string}
      />
      {children}
    </div>
  );
};

Layout.defaultProps = {
  backRoute: '/',
};

export default Layout;
