import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import { IGiftDetailsReduxActions, IGiftDetailsReduxProps } from './interfaces';
import GiftDetailsBase from './GiftDetailsBase';
import { getGiftStatusesHistoryThunk } from '../../../status/store/gift-status-history.thunks';
import { getFullGiftThunk } from '../../store/gift.thunks';

const mapStateToProps = ({
  gift,
  giftStatusesHistory,
}: AplicationState): IGiftDetailsReduxProps => {
  return {
    gift,
    giftStatusesHistory,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): IGiftDetailsReduxActions => ({
  getGift: (id: string) => dispatch(getFullGiftThunk(id)),
  getGiftStatusesHistory: (id: string) =>
    dispatch(getGiftStatusesHistoryThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftDetailsBase);
