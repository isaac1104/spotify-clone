import { FETCH_CURRENT_SONG_DATA } from '../actions/types';

const INITIAL_STATE = {
  data: []
};

const currentSongReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_CURRENT_SONG_DATA:
      return {
        ...state,
        data: payload,
      }
    default:
      return state;
  }
};

export default currentSongReducer;
