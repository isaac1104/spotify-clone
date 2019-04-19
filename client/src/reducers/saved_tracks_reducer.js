import {
  FETCH_SAVED_TRACKS_REQUEST,
  FETCH_SAVED_TRACKS_SUCCESS,
  FETCH_SAVED_TRACKS_FAIL,
  FETCH_MORE_TRACKS_REQUEST,
  FETCH_MORE_TRACKS_SUCCESS,
  FETCH_MORE_TRACKS_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  isFetchingMore: false,
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
    case FETCH_MORE_TRACKS_REQUEST:
      return {
        ...state,
        isFetchingMore: true
      };
    case FETCH_MORE_TRACKS_SUCCESS:
    const { next, previous, href, items } = payload;
      return {
        ...state,
        data: {
          ...state.data,
          href,
          next,
          previous,
          items: [...state.data.items, ...items]
        },
        isFetchingMore: false,
        errorMsg: null
      };
    case FETCH_MORE_TRACKS_FAIL:
      return {
        ...state,
        isFetchingMore: false,
        errorMsg: payload
      }
    default:
      return state;
  }
};

export default savedTracksReducer;
