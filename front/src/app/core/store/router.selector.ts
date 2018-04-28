import { createFeatureSelector, createSelector } from '@ngrx/store';
import {RouterStateUrl} from './router.reducer';

export const selectFeature = createFeatureSelector<RouterStateUrl>('router');

export const selectTitle = createSelector(selectFeature, (state: any) => {
  return state.state.title;
});
