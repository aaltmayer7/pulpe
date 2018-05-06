import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {MachineState} from '../store/machine.reducer';
import {selectLoaded} from '../store/machine.selectors';
import {LoadAllMachines} from '../store/machine.action';
import {filter, take, tap} from 'rxjs/operators';

@Injectable()
export class MachinesGuard implements CanActivate {

  constructor(private store: Store<MachineState>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(selectLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new LoadAllMachines());
        }
      }),
      filter(loaded => !!loaded),
      take(1),
    );
  }
}
