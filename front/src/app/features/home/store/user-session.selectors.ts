import {createSelector, createFeatureSelector} from '@ngrx/store';
import {adapter, UserSessionState} from './user-session.reducer';

export const selectFeature = createFeatureSelector<UserSessionState>('userSession');

const adapterSelectors = adapter.getSelectors();

export const selectAuthProfile = createSelector(
  selectFeature,
  (state: UserSessionState) => state.authProfile,
);

export const selectAuthenticated = createSelector(
  selectFeature,
  (state: UserSessionState) => state.authenticated,
);
