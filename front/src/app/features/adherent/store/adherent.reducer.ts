import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {AdherentAction, AdherentActionsTypes} from './adherent.action';
import {Adherent} from '../models/Adherent.model';

export interface AdherentState extends EntityState<Adherent> {
  loaded: boolean;
  loading: boolean;
}

export const adapter: EntityAdapter<Adherent> = createEntityAdapter<Adherent>({
  selectId: (adherent: Adherent) => adherent._id
});

export const initialState: AdherentState = adapter.getInitialState({
  loaded: false,
  loading: false,
});

export function adherentReducer(state: AdherentState = initialState,
                               action: AdherentAction) {
  switch (action.type) {

    case AdherentActionsTypes.LoadAll: {
      return {
        ...state,
        loading: true,
      };
    }

    case AdherentActionsTypes.LoadAllSuccess: {
      return adapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false,
      });
    }

    case AdherentActionsTypes.LoadAllError: {
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
