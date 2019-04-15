import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentUserReducer from './current_user_reducer';
import currentSongReducer from './current_song_reducer';
import savedTracksReducer from './saved_tracks_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  currentUser: currentUserReducer,
  currentSong: currentSongReducer,
  savedTracks: savedTracksReducer
});

export default rootReducer;
