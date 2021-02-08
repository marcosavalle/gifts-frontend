import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import { getGiftsReceivedThunk } from '../../store/gifts-received.thunks';
import {
  GiftsReceivedReduxActions,
  GiftsReceivedReduxProps,
} from './interfaces';
import GiftsReceived from './GiftsReceived';
import { GiftsFilters } from '../../models/gift.model';
import { getStatusThunk } from '../../../status/store/status.thunks';
import { cancelGiftReceiverThunk } from '../../store/gift-cancel.thunks';
import { clearData as clearGiftCancel } from '../../store/gift-cancel.actions';

const mapStateToProps = ({
  giftCancel,
  giftsReceived,
  status,
}: AplicationState): GiftsReceivedReduxProps => {
  return {
    giftCancel,
    giftsReceived,
    status,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): GiftsReceivedReduxActions => ({
  getAllGiftsReceived: (filters: GiftsFilters) =>
    dispatch(getGiftsReceivedThunk(filters)),
  getStatus: () => dispatch(getStatusThunk()),
  cancelGift: (id) => dispatch(cancelGiftReceiverThunk(id)),
  clearGiftCancel: () => dispatch(clearGiftCancel()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftsReceived);
