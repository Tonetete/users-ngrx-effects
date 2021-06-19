import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducer';

export interface AppState {
  users: reducers.UsersState;
  user: reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
  user: reducers.userReducer,
  users: reducers.usersReducer,
};
