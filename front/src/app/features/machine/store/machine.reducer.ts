import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {MachineAction, MachineActionsTypes} from './machine.action';
import {Machine} from '../models/machine.model';

export interface MachineState extends EntityState<Machine> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Machine> = createEntityAdapter<Machine>({
  selectId: (machine: Machine) => machine._id
});

export const initialState: MachineState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export function machineReducer(state: MachineState = initialState,
                               action: MachineAction) {
  switch (action.type) {

    case MachineActionsTypes.LoadAll: {
      return {
        ...state,
        loading: true,
      };
    }

    case MachineActionsTypes.LoadAllSuccess: {
      return adapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false,
      });
    }

    case MachineActionsTypes.LoadAllError: {
      adapter.removeAll({
        ...state,
        loaded: true,
        loading: false,
      });
    }

    default:
      return state;
  }
}
