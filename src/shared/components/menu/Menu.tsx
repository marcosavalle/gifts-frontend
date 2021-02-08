import './Menu.css';
import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import UserIcon from '@material-ui/icons/PersonOutline';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import {
  MENU_ITEMS,
  MenuItem,
  DOCUMENTATION_LINKS,
  DocumentationLink,
} from '../../../core/constants/menu-items';
import { UserData } from '../../../core/models/user-data.model';

interface IMenuProps {
  userData: UserData | null;
  openMenu: boolean;
  handleOpenMenu: (open: boolean) => void;
}

const Menu = ({
  userData,
  openMenu,
  handleOpenMenu,
}: IMenuProps): JSX.Element => {
  const userAvatar = () => {
    if (userData?.avatar) {
      return <Avatar alt={`${userData.name} ${userData.lastName}`} src="" />;
    }

    return (
      <Avatar>
        <UserIcon />
      </Avatar>
    );
  };

  const list = () => (
    <div
      className="menu"
      role="presentation"
      onClick={() => handleOpenMenu(false)}>
      <Box
        boxShadow={1}
        alignItems="center"
        bgcolor="primary.main"
        p={2}
        style={{ width: '100%', height: 'auto' }}
        display="flex">
        {userAvatar()}
        <Box pl={2}>
          <Typography variant="subtitle2">
            {userData ? `Hola ${userData.name}` : ''}
          </Typography>
        </Box>
      </Box>
      <List>
        {MENU_ITEMS.map((item: MenuItem) => (
          <NavLink
            key={item.text}
            exact
            to={item.path}
            className="menu--item"
            activeClassName="menu--item-active">
            <ListItem button>
              <ListItemIcon>
                <item.icon />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <Box p={2}>
        <Typography variant="overline">Documentación</Typography>
      </Box>
      <List>
        {DOCUMENTATION_LINKS.map((item: DocumentationLink) => (
          <ListItem
            component="a"
            href={item.path}
            key={item.text}
            target="_blank">
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      open={openMenu}
      onClose={() => handleOpenMenu(false)}
      onOpen={() => handleOpenMenu(true)}>
      {list()}
    </SwipeableDrawer>
  );
};

export default Menu;
