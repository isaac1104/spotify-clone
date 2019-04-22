import axios from 'axios';
import * as types from './types';

export const fetchCurrentUserData = () => async dispatch => {
  dispatch({ type: types.FETCH_CURRENT_USER_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/current_user');
    const { data } = request;
    dispatch({ type: types.FETCH_CURRENT_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.FETCH_CURRENT_USER_FAIL, payload: e });
  }
};

export const fetchSavedTracksData = () => async dispatch => {
  dispatch({ type: types.FETCH_SAVED_TRACKS_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/saved_tracks');
    const { data } = request;
    dispatch({ type: types.FETCH_SAVED_TRACKS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.FETCH_SAVED_TRACKS_FAIL, payload: e });
  }
};

export const fetchMoreTracks = url => async (dispatch, getState) => {
  dispatch({ type: types.FETCH_MORE_TRACKS_REQUEST, payload: true });
  const { accessToken } = getState().currentUser.data;
  try {
    const request = await axios.get(url, { headers: { Authorization: `Bearer ${accessToken}` } });
    const { data } = request;
    dispatch({ type: types.FETCH_MORE_TRACKS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.FETCH_MORE_TRACKS_FAIL, payload: e });
  }
}

export const fetchCurrentSongData = data => async dispatch => {
  dispatch({ type: types.FETCH_CURRENT_SONG_DATA, payload: data });
};
