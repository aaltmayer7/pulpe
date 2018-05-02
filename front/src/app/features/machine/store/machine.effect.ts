import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';

import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {LoadAllMachines, LoadAllMachinesError, MachineActionsTypes} from './machine.action';
import {MachinesService} from '../services/machines.service';

@Injectable()
export class MachineEffects {
  constructor(private actions$: Actions,
              private toastr: ToastrService,
              private machineService: MachinesService) {
  }

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<LoadAllMachines>(MachineActionsTypes.LoadAll),
    switchMap(() => {
      return this.machineService.findAll().pipe(
        map(
          machines => new LoadAllMachines(machines),
        ),
        catchError(error => {
          return of(new LoadAllMachinesError(error));
        }),
      );
    }),
  );

  @Effect({dispatch: false})
  error$ = this.actions$.pipe(
    ofType<LoadAllMachinesError>(MachineActionsTypes.LoadAllError),
    map(action => action.payload),
    map((err: HttpErrorResponse) => {
      const {error} = err;
      this.toastr.error(error.message);
    }),
  );
}
