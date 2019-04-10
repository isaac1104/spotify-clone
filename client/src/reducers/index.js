import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentUserReducer from './current_user_reducer';
import savedTracksReducer from './saved_tracks_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  currentUser: currentUserReducer,
  savedTracks: savedTracksReducer
});

export default rootReducer;
