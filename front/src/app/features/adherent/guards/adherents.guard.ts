import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {filter, take, tap} from 'rxjs/operators';
import {AdherentState} from '../store/adherent.reducer';
import {Store} from '@ngrx/store';
import {selectLoaded} from '../store/adherent.selectors';
import {LoadAllAdherents} from '../store/adherent.action';

@Injectable()
export class AdherentsGuard implements CanActivate {

  constructor(private store: Store<AdherentState>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(selectLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadAllAdherents());
        }
      }),
      filter(loaded => !!loaded),
      take(1),
    );
  }
}
