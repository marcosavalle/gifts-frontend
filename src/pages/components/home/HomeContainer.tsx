/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../core/store/state.model';
import { GiftAcceptState } from '../../../features/gifts/models/gift-accept.model';
import { acceptGiftThunk } from '../../../features/gifts/store/gift-accept.thunks';
import { MostChosenState } from '../../../features/most-chosen/models/most-chosen.model';
import {
  getMostChosenCategoriesReceiverThunk,
  getMostChosenCategoriesSenderThunk,
  getMostChosenProductsReceiverThunk,
  getMostChosenProductsSenderThunk,
} from '../../../features/most-chosen/store/most-chosen.thunks';
import Home from './Home';

export interface IHomeReduxProps {
  giftAccept: GiftAcceptState;
  mostChosenProductsSender: MostChosenState;
  mostChosenProductsReceiver: MostChosenState;
  mostChosenCategoriesSender: MostChosenState;
  mostChosenCategoriesReceiver: MostChosenState;
}

export interface IHomeReduxActions {
  acceptGift: (id: string, accept: boolean, blocked: boolean) => void;
  getMostChosenCategoriesReceiver: (limit?: number) => void;
  getMostChosenCategoriesSender: (limit?: number) => void;
  getMostChosenProductsReceiver: (limit?: number) => void;
  getMostChosenProductsSender: (limit?: number) => void;
}

const mapStateToProps = ({
  giftAccept,
  mostChosenCategoriesReceiver,
  mostChosenCategoriesSender,
  mostChosenProductsReceiver,
  mostChosenProductsSender,
}: AplicationState): IHomeReduxProps => {
  return {
    giftAccept,
    mostChosenCategoriesReceiver,
    mostChosenCategoriesSender,
    mostChosenProductsReceiver,
    mostChosenProductsSender,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IHomeReduxActions => ({
  acceptGift: (id: string, accept: boolean, blocked: boolean) =>
    dispatch(acceptGiftThunk(id, accept, blocked)),
  getMostChosenCategoriesReceiver: (limit?: number) =>
    dispatch(getMostChosenCategoriesReceiverThunk(limit)),
  getMostChosenCategoriesSender: (limit?: number) =>
    dispatch(getMostChosenCategoriesSenderThunk(limit)),
  getMostChosenProductsReceiver: (limit?: number) =>
    dispatch(getMostChosenProductsReceiverThunk(limit)),
  getMostChosenProductsSender: (limit?: number) =>
    dispatch(getMostChosenProductsSenderThunk(limit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
