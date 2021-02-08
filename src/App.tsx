import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from './shared/components/loader/Loader';

const Home = lazy(() => import('./pages/components/home/HomeContainer'));
const Notifications = lazy(
  () => import('./pages/components/notifications/Notifications')
);
const GiftsSent = lazy(() => import('./pages/components/gifts-sent/GiftsSent'));
const GiftsReceived = lazy(
  () => import('./pages/components/gifts-received/GiftsReceived')
);
const NewGift = lazy(() => import('./pages/components/new-gift/NewGift'));
const GiftById = lazy(() => import('./pages/components/gift-by-id/GiftById'));
const GiftReceivedReception = lazy(
  () =>
    import('./pages/components/gift-received-reception/GiftReceivedReception')
);
const GiftSelect = lazy(
  () => import('./pages/components/gift-select/GiftSelect')
);
const GiftPay = lazy(() => import('./pages/components/gift-pay/GiftPay'));
const ShareGift = lazy(
  () => import('./pages/components/share-gift/ShareGiftContainer')
);
const Statistics = lazy(
  () => import('./pages/components/statistics/StatisticsContainer')
);
const NotFound = lazy(() => import('./pages/components/not-found/NotFound'));

const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/notificaciones" component={Notifications} />
          <Route exact path="/enviados" component={GiftsSent} />
          <Route exact path="/enviados/nuevo" component={NewGift} />
          <Route exact path="/enviado/:id" component={GiftById} />
          <Route exact path="/recibidos" component={GiftsReceived} />
          <Route exact path="/recibido/:id" component={GiftById} />
          <Route exact path="/gr/:hash" component={GiftReceivedReception} />
          <Route exact path="/seleccionar/:id" component={GiftSelect} />
          <Route exact path="/pagar/:id" component={GiftPay} />
          <Route exact path="/compartir/:id" component={ShareGift} />
          <Route exact path="/estadisticas" component={Statistics} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
