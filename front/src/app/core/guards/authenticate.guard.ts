import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {selectAuthenticated} from '../../features/home/store/user-session.selectors';
import {UserSessionState} from '../../features/home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {map, tap} from 'rxjs/operators';
import {LocalStorageService} from 'angular-2-local-storage';
import {AuthService} from '../services/auth.service';
import {AuthenticationProfile} from '../../features/home/models/authentication-profile.model';
import {SigninSuccess} from '../../features/home/store/user-session.action';

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
        debugger
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
