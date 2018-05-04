import {createSelector, createFeatureSelector} from '@ngrx/store';
import {adapter, AdherentState} from './adherent.reducer';

export const selectFeature = createFeatureSelector<AdherentState>('adherent');

const adapterSelectors = adapter.getSelectors();

export const selectLoaded = createSelector(
  selectFeature,
  (state: AdherentState) => state.loaded,
);

export const selectLoading = createSelector(
  selectFeature,
  (state: AdherentState) => state.loading,
);

export const selectAllAdherents = createSelector(
  selectFeature,
  adapterSelectors.selectAll,
);

export const selectCountAdherents = createSelector(
  selectFeature,
  adapterSelectors.selectTotal,
);

export const selectAdherentById = id =>
  createSelector(selectAllAdherents, items => {
      return items.find(Adherent => Adherent._id === id);
    }
  );
