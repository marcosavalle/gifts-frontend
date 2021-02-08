import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../../core/store/state.model';
import { getStatusThunk } from '../../../status/store/status.thunks';
import { cancelGiftSenderThunk } from '../../store/gift-cancel.thunks';
import { resetGiftThunk } from '../../store/gift-reset.thunks';
import { getGiftsSentThunk } from '../../store/gifts-sent.thunks';
import GiftsSent from './GiftsSent';
import { GiftsSentReduxProps, GiftsSentReduxActions } from './interfaces';
import { clearData as clearGiftCancel } from '../../store/gift-cancel.actions';
import { clearData as clearGiftReset } from '../../store/gift-reset.actions';

const mapStateToProps = ({
  giftCancel,
  giftReset,
  giftsSent,
  status,
}: AplicationState): GiftsSentReduxProps => {
  return {
    giftCancel,
    giftReset,
    giftsSent,
    status,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): GiftsSentReduxActions => ({
  getGiftsSent: (filters) => dispatch(getGiftsSentThunk(filters)),
  getStatus: () => dispatch(getStatusThunk()),
  resetGift: (id) => dispatch(resetGiftThunk(id)),
  cancelGift: (id) => dispatch(cancelGiftSenderThunk(id)),
  clearGiftCancel: () => dispatch(clearGiftCancel()),
  clearGiftReset: () => dispatch(clearGiftReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GiftsSent);
