import {AuthAction, AuthData} from '../authReducer';
import {SET_AUTH_DATA} from './Types';

export const setAuthData = (data: AuthData): AuthAction => ({
  type: SET_AUTH_DATA,
  payload: data,
});
