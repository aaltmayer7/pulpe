import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserSessionAction, UserSessionActionTypes} from './user-session.action';
import {AuthenticationProfile} from '../models/authentication-profile.model';

export interface UserSessionState extends EntityState<AuthenticationProfile> {
  authProfile: AuthenticationProfile;
}

export const adapter: EntityAdapter<AuthenticationProfile> = createEntityAdapter<AuthenticationProfile>({});

export const initialState: UserSessionState = adapter.getInitialState({
  authProfile: {} as AuthenticationProfile
});


export function userSessionReducer(state: UserSessionState = initialState,
                                   action: UserSessionAction) {
  switch (action.type) {

    case UserSessionActionTypes.SigninSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        authProfile: authProfile,
      };
    }

    case UserSessionActionTypes.SigninError: {
      return {
        ...state,
        authProfile: undefined,
      };
    }

    case UserSessionActionTypes.SignupSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        authProfile: authProfile,
      };
    }

    case UserSessionActionTypes.SignupError: {
      return {
        ...state,
        authProfile: undefined,
      };
    }

    default:
      return state;
  }
}
