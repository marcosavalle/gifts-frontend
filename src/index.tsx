import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from '@material-ui/core/styles';
import { store } from './core/store';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { client } from './core/plugins/apollo-client';
import { meliTheme } from './core/plugins/material-ui.theme';
import 'moment/locale/es';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={meliTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
