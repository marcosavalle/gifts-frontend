import { Reducer } from 'redux';
import { GiftStatusesHistoryState,GiftStatusesHistoryActionTypes,GiftStatusesHistoryActions } from '../models/gift-status-history.model'

export const initialState: GiftStatusesHistoryState = {
  loading: false,
  data: [],
  error: undefined,
  isFetchCompleted: false,  
};

const reducer: Reducer<GiftStatusesHistoryState> = (
  state = initialState,
  action: GiftStatusesHistoryActions
) => {
  switch (action.type) {
    case GiftStatusesHistoryActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true, isFetchCompleted: false };
    }
    case GiftStatusesHistoryActionTypes.FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload,
        isFetchCompleted: true,
      };
    }
    case GiftStatusesHistoryActionTypes.FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        isFetchCompleted: true,
      };
    }    
    default: {
      return state;
    }
  }
};

export { reducer as giftStatusesHistoryReducer };
