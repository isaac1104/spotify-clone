import { FETCH_SAVED_TRACKS_REQUEST, FETCH_SAVED_TRACKS_SUCCESS, FETCH_SAVED_TRACKS_FAIL } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMsg: null
};

const savedTracksReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_SAVED_TRACKS_REQUEST:
      return {
        ...state,
        isFetching: payload
      };
    case FETCH_SAVED_TRACKS_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false,
        errorMsg: null
      };
    case FETCH_SAVED_TRACKS_FAIL:
      return {
        ...state,
        data: [],
        isFetching: false,
        errorMsg: payload
      };
    default:
      return state;
  }
};

export default savedTracksReducer;
