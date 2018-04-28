/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import {storeFreeze} from 'ngrx-store-freeze';
import {
  routerReducer,
  RouterReducerState,
  RouterStateSerializer,
} from '@ngrx/router-store';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {RouterStateUrl} from './router.reducer';
import {environment} from '../../../environments/environment';
import {userSessionReducer, UserSessionState} from '../../features/home/store/user-session.reducer';
import {UserSessionActionTypes} from '../../features/home/store/user-session.action';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  userSession: UserSessionState;
}

/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  userSession: userSessionReducer
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze, userSessionMetaReducer]
  : [userSessionMetaReducer];

/**
 * MetaReducer
 * Reinitialisation du store
 * TODO : for disconnect action.
 *
 * @param reducer
 * @returns {(state, action) => any}
 */
export function userSessionMetaReducer(reducer) {
  return function newReducer(state, action) {
    if (action.type === UserSessionActionTypes.Logout) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
