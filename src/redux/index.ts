import {combineReducers} from 'redux';
import {AuthState, authReducer} from './authReducer';

export interface RootState {
  auth: AuthState;
  // Add other slices of state if you have more reducers
}

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
