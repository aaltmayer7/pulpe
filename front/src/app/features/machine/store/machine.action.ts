import {Action} from '@ngrx/store';
import {Machine} from '../models/machine.model';

export enum MachineActionsTypes {
  LoadAll = '[Machine] Load All',
  LoadAllSuccess = '[Machine] Load All Success',
  LoadAllError = '[Machine] Load All Error',
}

/**
 * Load machines
 */
export class LoadAllMachines implements Action {
  readonly type = MachineActionsTypes.LoadAll;
}

export class LoadAllMachinesSuccess implements Action {
  readonly type = MachineActionsTypes.LoadAllSuccess;

  constructor(public payload: Machine[]) {}
}

export class LoadAllMachinesError implements Action {
  readonly type = MachineActionsTypes.LoadAllError;

  constructor(public payload: any) {}
}


export type MachineAction =
  | LoadAllMachines
  | LoadAllMachinesSuccess
  | LoadAllMachinesError;
