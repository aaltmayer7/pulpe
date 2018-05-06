import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserSessionAction, UserSessionActionTypes} from './user-session.action';
import {AuthenticationProfile} from '../../auth/models/authentication-profile.model';

export interface UserSessionState extends EntityState<AuthenticationProfile> {
  authProfile: AuthenticationProfile;
  authenticated: boolean;
}

export const adapter: EntityAdapter<AuthenticationProfile> = createEntityAdapter<AuthenticationProfile>({});

export const initialState: UserSessionState = adapter.getInitialState({
  authProfile: undefined,
  authenticated: false
});


export function userSessionReducer(state: UserSessionState = initialState,
                                   action: UserSessionAction) {
  switch (action.type) {

    case UserSessionActionTypes.SigninSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        authProfile: authProfile,
        authenticated: true
      };
    }

    case UserSessionActionTypes.SigninError: {
      return {
        ...state,
        authProfile: undefined,
        authenticated: false
      };
    }

    case UserSessionActionTypes.SignupSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return {
        ...state,
        authProfile: authProfile,
        authenticated: true
      };
    }

    case UserSessionActionTypes.SignupError: {
      return {
        ...state,
        authProfile: undefined,
        authenticated: false
      };
    }

    default:
      return state;
  }
}
