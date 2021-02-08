import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Badge,
  Box,
  CircularProgress,
  Collapse,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { Alert, Skeleton } from '@material-ui/lab';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { CategoriesState } from '../../models/categories.model';
import { Category, CategoryState } from '../../models/category.model';
import {
  EMPTY_MESSAGES,
  ERROR_MESSAGES,
} from '../../../../core/constants/general-messages';

interface ICategoriesFormListProps {
  categories: CategoriesState;
  selectedCategory: CategoryState;
  selectCategory: (category: Category) => void;
  isSelected: (category: Category) => boolean;
  openCategory: (id: string) => void;
  isOpened: (meliId: string) => boolean;
  selectedChildrens: (meliId: string) => number;
}

const useStyles = makeStyles({
  root: {
    background: '#eeeeee',
    paddingLeft: '40px',
  },
});

const CategoriesFormList = ({
  categories,
  selectedCategory,
  selectCategory,
  isSelected,
  openCategory,
  isOpened,
  selectedChildrens,
}: ICategoriesFormListProps): JSX.Element => {
  const classes = useStyles();

  if (categories.error)
    return (
      <Alert severity="error" variant="outlined">
        {ERROR_MESSAGES.FETCH_ERROR}
      </Alert>
    );

  if (categories.loading)
    return (
      <List>
        {[0, 1, 2, 3, 4, 5].map((val, index) => {
          return (
            <Fragment key={val}>
              <ListItem button className="category--item">
                <ListItemText>
                  <Skeleton />{' '}
                </ListItemText>
              </ListItem>
              {index !== 5 ? <Divider /> : null}
            </Fragment>
          );
        })}
      </List>
    );

  if (!categories.data.length)
    return (
      <Alert severity="info" variant="outlined">
        {EMPTY_MESSAGES.CATEGORIES}
      </Alert>
    );

  const getChildrenCategories = () => {
    if (selectedCategory.loading)
      return (
        <Box p={3} display="flex" flexDirection="column" alignItems="center">
          <CircularProgress
            color="secondary"
            style={{ marginBottom: '20px' }}
          />
          <Typography variant="caption" color="secondary">
            Buscando categorías
          </Typography>
        </Box>
      );

    if (selectedCategory.error)
      return (
        <Box p={4}>
          <Alert severity="error">{ERROR_MESSAGES.FETCH_ERROR}</Alert>
        </Box>
      );

    if (!selectedCategory.data?.childrenCategories.length)
      return (
        <Box p={4}>
          <Typography variant="caption" color="secondary">
            {EMPTY_MESSAGES.CATEGORIES}
          </Typography>
        </Box>
      );

    return selectedCategory.data?.childrenCategories.map(
      (childrenCategory: Category) => {
        const { meliId: childrenId, name: childrenName } = childrenCategory;
        return (
          <Fragment key={childrenId}>
            <ListItem
              button
              className="category--item"
              classes={{
                root: classes.root,
              }}
              onClick={() => selectCategory(childrenCategory)}>
              <ListItemText primary={childrenName} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={() => selectCategory(childrenCategory)}
                  checked={isSelected(childrenCategory)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </Fragment>
        );
      }
    );
  };

  return (
    <List disablePadding>
      {categories.data.map((category: Category) => {
        const { meliId, name } = category;
        const childrens = selectedChildrens(meliId);
        const opened = isOpened(meliId);
        return (
          <Fragment key={meliId}>
            <ListItem
              button
              onClick={() => openCategory(meliId)}
              className="category--item">
              <ListItemText primary={name} />
              {childrens ? (
                <Badge color="secondary" badgeContent={childrens}>
                  <ExpandMore />
                </Badge>
              ) : (
                <ExpandMore />
              )}
            </ListItem>
            <Divider />
            <Collapse in={opened} timeout="auto" unmountOnExit>
              {getChildrenCategories()}
            </Collapse>
            <Divider />
          </Fragment>
        );
      })}
    </List>
  );
};

export default CategoriesFormList;
