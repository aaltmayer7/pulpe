import {createSelector, createFeatureSelector} from '@ngrx/store';
import {adapter, UserSessionState} from './user-session.reducer';

export const selectFeature = createFeatureSelector<UserSessionState>('userSession');

const adapterSelectors = adapter.getSelectors();

export const selectAuthenticated = createSelector(
  selectFeature,
  (state: UserSessionState) => state.authenticated,
);

export const selectToken = createSelector(
  selectFeature,
  (state: UserSessionState) => state.token,
);

export const selectAuthProfile = createSelector(
  selectFeature,
  adapterSelectors.selectAll[0],
);
