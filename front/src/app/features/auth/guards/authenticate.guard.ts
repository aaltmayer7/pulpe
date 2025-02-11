import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {selectAuthenticated, selectAuthProfile} from '../../home/store/user-session.selectors';
import {UserSessionState} from '../../home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';
import {LocalStorageService} from 'angular-2-local-storage';
import {AuthenticationProfile} from '../models/authentication-profile.model';
import {SigninSuccess} from '../../home/store/user-session.action';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {

  constructor(private store: Store<UserSessionState>,
              private router: Router,
              private authService: AuthService,
              private localStorageService: LocalStorageService) {
  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectAuthenticated).pipe(
      tap(authenticated => {
        if (!authenticated) {
          if (this.authService.authenticated()) {
            const authProfile: AuthenticationProfile = this.localStorageService.get('profile');
            this.store.dispatch(new SigninSuccess(authProfile),);
          } else {
            this.router.navigate(['/accueil']);
          }
        }

      }),
      map(login => !!login),
    );
  }
}
