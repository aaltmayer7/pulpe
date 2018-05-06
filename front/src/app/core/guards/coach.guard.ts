import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserSessionState} from '../../features/home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {selectAuthProfile} from '../../features/home/store/user-session.selectors';
import {AuthenticationProfile} from '../../features/auth/models/authentication-profile.model';
import {switchMap, tap} from 'rxjs/operators';


@Injectable()
export class CoachGuard implements CanActivate {
  constructor(private store: Store<UserSessionState>) {
  }

  canActivate(): Observable<boolean> {
    return this.isCoach();
  }

  private isCoach(): Observable<boolean> {
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
