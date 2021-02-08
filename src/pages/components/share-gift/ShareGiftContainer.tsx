import { connect } from 'react-redux';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AplicationState } from '../../../core/store/state.model';
import { ShareGiftReduxActions, ShareGiftReduxProps } from './interfaces';
import ShareGift from './ShareGift';
import { getFullGiftThunk } from '../../../features/gifts/store/gift.thunks';

const mapStateToProps = ({ gift }: AplicationState): ShareGiftReduxProps => {
  return {
    gift,
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<AplicationState, undefined, Action>
): ShareGiftReduxActions => ({
  getGift: (id) => dispatch(getFullGiftThunk(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShareGift);
