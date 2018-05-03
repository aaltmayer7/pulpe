import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserSessionState} from '../../features/home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {selectAuthProfile} from '../../features/home/store/user-session.selectors';
import {AuthenticationProfile} from '../../features/home/models/authentication-profile.model';
import {switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {map} from 'rxjs/operator/map';

@Injectable()
export class CoachGuard implements CanActivate {
  constructor(private store: Store<UserSessionState>) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select(selectAuthProfile).pipe(
      switchMap((authProfile: AuthenticationProfile) => {
        if (!authProfile) {
          return of(false);
        }
        return of(authProfile.isCoach);
      })
    );
  }
}
