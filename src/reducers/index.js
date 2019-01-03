import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication-reducer';
import IdeapadFormReducer from './ideapad-form-reducer';
import IdeasReducer from './ideas-reducer';

export default combineReducers({
  auth: AuthenticationReducer,
  ideapadForm: IdeapadFormReducer,
  ideas: IdeasReducer
});