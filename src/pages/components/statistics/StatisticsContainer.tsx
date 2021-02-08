/* eslint-disable import/no-cycle */
import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../core/store/state.model';
import {
  BudgetStatisticsReceiverState,
  BudgetStatisticsSenderState,
} from '../../../features/statistics/models/statistics-budget.model';
import {
  CategoriesStatisticsReceiverState,
  CategoriesStatisticsSenderState,
} from '../../../features/statistics/models/statistics-categories.model';
import {
  GiftsStatisticsReceiverState,
  GiftsStatisticsSenderState,
} from '../../../features/statistics/models/statistics-gifts.model';
import { getStatisticsBudgetReceiverThunk } from '../../../features/statistics/store/statistics-budget-receiver.thunks';
import { getStatisticsBudgetSenderThunk } from '../../../features/statistics/store/statistics-budget-sender.thunks';
import { getStatisticsCategoriesReceiverThunk } from '../../../features/statistics/store/statistics-categories-receiver.thunks';
import { getStatisticsCategoriesSenderThunk } from '../../../features/statistics/store/statistics-categories-sender.thunks';
import { getStatisticsGiftsReceiverThunk } from '../../../features/statistics/store/statistics-gifts-receiver.thunks';
import { getStatisticsGiftsSenderThunk } from '../../../features/statistics/store/statistics-gifts-sender.thunks';

import Statistics from './Statistics';

export interface IStatisticsReduxProps {
  categoriesStatisticsSender: CategoriesStatisticsSenderState;
  categoriesStatisticsReceiver: CategoriesStatisticsReceiverState;
  giftsStatisticsSender: GiftsStatisticsSenderState;
  giftsStatisticsReceiver: GiftsStatisticsReceiverState;
  budgetStatisticsSender: BudgetStatisticsSenderState;
  budgetStatisticsReceiver: BudgetStatisticsReceiverState;
}

export interface IStatisticsReduxActions {
  getStatisticsCategoriesReceiver: (selector: string) => void;
  getStatisticsCategoriesSender: (selector: string) => void;
  getStatisticsGiftsReceiver: (selector: string) => void;
  getStatisticsGiftsSender: (selector: string) => void;
  getStatisticsBudgetReceiver: (selector: string) => void;
  getStatisticsBudgetSender: (selector: string) => void;
}

const mapStateToProps = ({
  categoriesStatisticsReceiver,
  categoriesStatisticsSender,
  giftsStatisticsSender,
  giftsStatisticsReceiver,
  budgetStatisticsSender,
  budgetStatisticsReceiver,
}: AplicationState): IStatisticsReduxProps => {
  return {
    categoriesStatisticsSender,
    categoriesStatisticsReceiver,
    giftsStatisticsSender,
    giftsStatisticsReceiver,
    budgetStatisticsSender,
    budgetStatisticsReceiver,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IStatisticsReduxActions => ({
  getStatisticsCategoriesReceiver: (selector: string) =>
    dispatch(getStatisticsCategoriesReceiverThunk(selector)),
  getStatisticsCategoriesSender: (selector: string) =>
    dispatch(getStatisticsCategoriesSenderThunk(selector)),
  getStatisticsGiftsReceiver: (selector: string) =>
    dispatch(getStatisticsGiftsReceiverThunk(selector)),
  getStatisticsGiftsSender: (selector: string) =>
    dispatch(getStatisticsGiftsSenderThunk(selector)),
  getStatisticsBudgetReceiver: (selector: string) =>
    dispatch(getStatisticsBudgetReceiverThunk(selector)),
  getStatisticsBudgetSender: (selector: string) =>
    dispatch(getStatisticsBudgetSenderThunk(selector)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
