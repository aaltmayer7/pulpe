import {Action} from '@ngrx/store';
import {AuthenticationProfile} from '../models/authentication-profile.model';

export enum UserSessionActionTypes {
  Signin = '[USER SESSION] Signin',
  SigninSuccess = '[USER SESSION] Signin Success',
  SigninError = '[USER SESSION] Signin Error',

  Signup = '[USER SESSION] Signup',
  SignupSuccess = '[USER SESSION] Signup Success',
  SignupError = '[USER SESSION] Signup Error',

  Logout = '[USER SESSION] Logout',
}

/**
 * Signin
 */
export class Signin implements Action {
  readonly type = UserSessionActionTypes.Signin;

  constructor(public payload: AuthenticationProfile) {
  }
}

export class SigninSuccess implements Action {
  readonly type = UserSessionActionTypes.SigninSuccess;

  constructor(public payload: AuthenticationProfile) {
  }
}

export class SigninError implements Action {
  readonly type = UserSessionActionTypes.SigninError;

  constructor(public payload: any) {
  }
}

/**
 * Signup
 */
export class Signup implements Action {
  readonly type = UserSessionActionTypes.Signup;

  constructor(public payload: AuthenticationProfile) {
  }
}

export class SignupSuccess implements Action {
  readonly type = UserSessionActionTypes.SignupSuccess;

  constructor(public payload: AuthenticationProfile) {
  }
}

export class SignupError implements Action {
  readonly type = UserSessionActionTypes.SignupError;

  constructor(public payload: any) {
  }
}

/**
 * Logout
 */
export class Logout implements Action {
  readonly type = UserSessionActionTypes.Logout;

  constructor(public payload: undefined) {
  }
}

export type UserSessionAction =
  | Signin
  | SigninSuccess
  | SigninError
  | Signup
  | SignupSuccess
  | SignupError
  | Logout;
