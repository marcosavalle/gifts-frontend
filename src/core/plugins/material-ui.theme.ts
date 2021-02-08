/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createMuiTheme } from '@material-ui/core/styles';
import ProximaNovaRegularWoff2 from '../../resources/fonts/proximanova-regular.woff2';
import ProximaNovaLightWoff2 from '../../resources/fonts/proximanova-light.woff2';
import ProximaNovaSemiboldWoff2 from '../../resources/fonts/proximanova-semibold.woff2';

const proximaNovaRegular = {
  fontFamily: 'Proxima Nova',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    url(${ProximaNovaRegularWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaNovaLight = {
  fontFamily: 'Proxima Nova',
  fontStyle: 'light',
  fontWeight: 200,
  src: `
    url(${ProximaNovaLightWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const proximaNovaSemiBold = {
  fontFamily: 'Proxima Nova',
  fontStyle: 'bold',
  fontWeight: 600,
  src: `
    url(${ProximaNovaSemiboldWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
}

const primaryMeliColors: PaletteColor = {
  main: '#FFE600',
  light: '#CCCCCC',
  dark: '#333333',
};

const secondaryMeliColors: PaletteColor = {
  main: '#3483fa',
  dark: '#2D3277',
};

const infoColors: PaletteColor = {
  main: '#3483fa',
};

export const meliTheme = createMuiTheme({
  typography: {
    fontFamily:
      'Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif',
  },
  palette: {
    primary: primaryMeliColors,
    secondary: secondaryMeliColors,
    info: infoColors,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          proximaNovaRegular,
          proximaNovaLight,
          proximaNovaSemiBold,
        ],
      },
    },
  },
});
