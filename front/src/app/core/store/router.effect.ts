import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';

import * as actions from './router.action';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.ofType(actions.GO).pipe(
    map((action: actions.Go) => action.payload),
    tap(({ path }) => {
      this.router.navigate(path);
    }),
  );
}
