import {createSelector, createFeatureSelector} from '@ngrx/store';
import {adapter, MachineState} from './machine.reducer';

export const selectFeature = createFeatureSelector<MachineState>('machine');

const adapterSelectors = adapter.getSelectors();

export const selectLoaded = createSelector(
  selectFeature,
  (state: MachineState) => state.loaded,
);

export const selectLoading = createSelector(
  selectFeature,
  (state: MachineState) => state.loading,
);

export const selectAllMachines = createSelector(
  selectFeature,
  adapterSelectors.selectAll,
);

export const selectCountMachines = createSelector(
  selectFeature,
  adapterSelectors.selectTotal,
);

export const selectMachineById = id =>
  createSelector(selectAllMachines, items => {
      return items.find(machine => machine._id === id);
    }
  );
