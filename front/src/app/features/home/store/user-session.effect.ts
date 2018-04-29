import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';

import {catchError, map, switchMap} from 'rxjs/operators';

import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../services/auth.service';
import {Logout, Signin, SigninError, SigninSuccess, Signup, SignupError, UserSessionActionTypes} from './user-session.action';
import {AuthenticationProfile} from '../models/authentication-profile.model';
import {of} from 'rxjs/observable/of';
import {LocalStorageService} from 'angular-2-local-storage';
import {ToastrService} from 'ngx-toastr';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class UserSessionEffects {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private localStorageService: LocalStorageService,
              private toastr: ToastrService,
              private router: Router) {
  }

  @Effect()
  signin$: Observable<Action> = this.actions$.pipe(
    ofType<Signin>(UserSessionActionTypes.Signin),
    map(action => action.payload),
    switchMap((authProfile: AuthenticationProfile) => {
      return this.authService.signin(authProfile)
        .pipe(
          map((authProfile: AuthenticationProfile) => new SigninSuccess(authProfile)),
          catchError(error => of(new SigninError(error))),
        );
    }),
  );

  @Effect({dispatch: false})
  signinSuccess$ = this.actions$.pipe(
    ofType<SigninSuccess>(UserSessionActionTypes.SigninSuccess),
    map(action => action.payload),
    map((authProfile: AuthenticationProfile) => {
      this.localStorageService.set('profile', authProfile);
      this.router.navigateByUrl('home');
    })
  );

  @Effect()
  signup: Observable<Action> = this.actions$.pipe(
    ofType<Signup>(UserSessionActionTypes.Signup),
    map(action => action.payload),
    switchMap((authProfile: AuthenticationProfile) => {
      return this.authService
        .signup(authProfile)
        .pipe(
          map((authProfile: AuthenticationProfile) => new Signup(authProfile)),
          catchError(error => of(new SignupError(error))),
        );
    }),
  );

  @Effect({dispatch: false})
  signupSuccess$ = this.actions$.pipe(
    ofType<SigninSuccess>(UserSessionActionTypes.SigninSuccess),
    map(action => action.payload),
    map((authProfile: AuthenticationProfile) => {
      this.localStorageService.set('profile', authProfile);
      this.router.navigateByUrl('home');
    })
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(UserSessionActionTypes.Logout),
    map(() => this.authService.logout())
  );

  @Effect({dispatch: false})
  error$ = this.actions$.pipe(
    ofType<SigninError | SignupError>(UserSessionActionTypes.SigninError, UserSessionActionTypes.SignupError),
    map(action => action.payload),
    map((err: HttpErrorResponse) => {
      const {error} = err;
      this.toastr.error(error.message);
    }),
  );
}
