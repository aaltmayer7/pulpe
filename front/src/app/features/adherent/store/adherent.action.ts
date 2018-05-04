import {Action} from '@ngrx/store';
import {Adherent} from '../models/adherent.model';

export enum AdherentActionsTypes {
  LoadAll = '[Adherent] Load All',
  LoadAllSuccess = '[Adherent] Load All Success',
  LoadAllError = '[Adherent] Load All Error',
}

/**
 * Load Adherents
 */
export class LoadAllAdherents implements Action {
  readonly type = AdherentActionsTypes.LoadAll;
}

export class LoadAllAdherentsSuccess implements Action {
  readonly type = AdherentActionsTypes.LoadAllSuccess;

  constructor(public payload: Adherent[]) {}
}

export class LoadAllAdherentsError implements Action {
  readonly type = AdherentActionsTypes.LoadAllError;

  constructor(public payload: any) {}
}


export type AdherentAction =
  | LoadAllAdherents
  | LoadAllAdherentsSuccess
  | LoadAllAdherentsError;
