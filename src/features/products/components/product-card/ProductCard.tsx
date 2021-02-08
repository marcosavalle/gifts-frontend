import {
  Box,
  Checkbox,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Product } from '../../models/product.model';

interface IProductCardProps {
  product: Product;
  selectProduct: (product: Product) => void;
  isSelected: (product: Product) => boolean;
  isEnabled: (product: Product) => boolean;
}

const useStyles = makeStyles((theme) => ({
  price: {
    marginBottom: '6px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '24px',
    },
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#999',
    padding: 0,
    margin: 0,
    [theme.breakpoints.down('md')]: {
      fontSize: '9px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '12px',
    },
  },
  title: {
    fontWeight: 300,
    marginBottom: '8px',
    paddingRight: '10px',
    [theme.breakpoints.down('md')]: {
      fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  discount: {
    color: '#00a650',
    marginLeft: '6px',
    marginRight: '8px',
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '14px',
    },
  },
  full: {
    fill: '#00a650',
    width: 'auto',
    [theme.breakpoints.down('md')]: {
      height: '12px',
    },
    [theme.breakpoints.up('md')]: {
      height: '14px',
    },
  },
  normalShipping: {
    color: '#3483FA',
    background: '#ECF3FC',
    padding: '2px 4px',
    borderRadius: '6px',
    fontWeight: 500,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '14px',
    },
  },
}));

const getDiscount = (original: number, final: number) => {
  return Math.floor(100 - (final * 100) / original);
};

const getThumbnail = (img: string) => {
  return img.replace('http', 'https').replace('-I.jpg', '-O.jpg');
};

const ProductCard = ({
  product,
  selectProduct,
  isSelected,
  isEnabled,
}: IProductCardProps): JSX.Element => {
  const classes = useStyles();
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(isSelected(product));
  }, [isSelected, product]);

  const select = (p: Product) => {
    setSelected(!selected);
    selectProduct(p);
  };

  return (
    <>
      <Box
        display="flex"
        bgcolor="white"
        alignItems="flex-start"
        justifyContent="space-between"
        minHeight={[124, 124, 168]}
        px={[1, 2]}
        pt={1}
        pb={2}>
        <Box display="flex" alignItems="center">
          <Box
            minWidth={[120, 130, 160]}
            maxWidth={[120, 130, 160]}
            minHeight={[120, 130, 160]}
            maxHeight={[120, 130, 160]}
            style={{
              backgroundImage: `url(${getThumbnail(product.thumbnail)})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              backgroundSize: 'contain',
            }}
          />
          <Box pl={[1, 2]}>
            <Typography className={classes.title}>{product.title}</Typography>
            {product.original_price ? (
              <Typography className={classes.originalPrice}>
                $ {product.original_price}
              </Typography>
            ) : null}
            <Box display="flex" alignItems="center">
              <Typography className={classes.price}>
                $ {product.price}
              </Typography>
              {product.original_price ? (
                <Typography className={classes.discount}>
                  {getDiscount(
                    parseFloat(product.original_price),
                    product.price
                  )}
                  % OFF
                </Typography>
              ) : null}
            </Box>
            <Box display="flex" alignItems="center">
              {product.shipping.free_shipping ? (
                <Typography className={classes.discount}>
                  Envío gratis
                </Typography>
              ) : null}
              {product.shipping.logistic_type === 'fulfillment' ? (
                <svg
                  className={classes.full}
                  viewBox="0 0 100 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.4 0h12.8l-6.4 11.429h10.667l-17.067 20.571 4.267-13.714h-10.667l6.4-18.286zM34.626 23.467h-4.77l4.077-18.498h13.562l-0.915 4.16h-8.791l-0.61 2.884h8.57l-0.915 4.16h-8.597l-1.609 7.294zM57.687 23.799c-5.685 0-8.486-2.718-8.486-6.601 0-0.305 0.083-0.943 0.139-1.22l2.441-11.010h4.853l-2.413 10.899c-0.028 0.139-0.083 0.444-0.083 0.777 0.028 1.525 1.193 2.995 3.55 2.995 2.551 0 3.855-1.609 4.326-3.772l2.413-10.899h4.826l-2.413 10.982c-0.998 4.493-3.439 7.849-9.152 7.849zM82.33 23.467h-12.203l4.077-18.498h4.77l-3.134 14.338h7.405l-0.915 4.16zM98.596 23.467h-12.203l4.077-18.498h4.77l-3.134 14.338h7.405l-0.915 4.16z" />
                </svg>
              ) : null}
            </Box>
            {product.tags.includes('shipping_guaranteed') ? (
              <Box mt={[0.5, 1]}>
                <Typography component="span" className={classes.normalShipping}>
                  Envío con normalidad
                </Typography>
              </Box>
            ) : null}
          </Box>
        </Box>
        <Checkbox
          style={{ padding: 0, margin: 0 }}
          onChange={() => select(product)}
          checked={selected}
          disabled={!isEnabled(product) && !selected}
        />
      </Box>
      <Divider style={{ backgroundColor: '#eee' }} />
    </>
  );
};

export default ProductCard;
