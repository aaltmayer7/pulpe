import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';

import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {LoadAllAdherents, LoadAllAdherentsError, LoadAllAdherentsSuccess, AdherentActionsTypes} from './adherent.action';
import {AdherentsService} from '../services/adherents.service';

@Injectable()
export class AdherentsEffects {
  constructor(private actions$: Actions,
              private toastr: ToastrService,
              private adherentsService: AdherentsService) {
  }

  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<LoadAllAdherents>(AdherentActionsTypes.LoadAll),
    switchMap(() => {
      return this.adherentsService.findAll().pipe(
        map(
          adherents => new LoadAllAdherentsSuccess(adherents),
        ),
        catchError(error => of(new LoadAllAdherentsError(error))),
      );
    }),
  );

  @Effect({dispatch: false})
  error$ = this.actions$.pipe(
    ofType<LoadAllAdherentsError>(AdherentActionsTypes.LoadAllError),
    map(action => action.payload),
    map((err: HttpErrorResponse) => {
      const {error} = err;
      this.toastr.error(error.message);
    }),
  );
}
