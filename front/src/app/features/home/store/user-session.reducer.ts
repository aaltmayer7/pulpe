import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserSessionAction, UserSessionActionTypes} from './user-session.action';
import {AuthenticationProfile} from '../models/authentication-profile.model';

export interface UserSessionState extends EntityState<AuthenticationProfile> {
  token: string;
  authenticated: boolean;
}

export const adapter: EntityAdapter<AuthenticationProfile> = createEntityAdapter<AuthenticationProfile>({});

export const initialState: UserSessionState = adapter.getInitialState({
  token: undefined,
  authenticated: false
});


export function userSessionReducer(state: UserSessionState = initialState,
                                   action: UserSessionAction) {
  switch (action.type) {

    case UserSessionActionTypes.Signin: {
      return {
        ...state,
      };
    }

    case UserSessionActionTypes.SigninSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return adapter.addOne(authProfile, {
        ...state,
        token: authProfile.token,
        authenticated: true,
      });
    }

    case UserSessionActionTypes.SigninError: {
      return {
        ...state,
        token: undefined,
        authenticated: false,
      };
    }

    case UserSessionActionTypes.Signup: {
      return {
        ...state,
      };
    }

    case UserSessionActionTypes.SignupSuccess: {
      const authProfile: AuthenticationProfile = action.payload;
      return adapter.addOne(authProfile, {
        ...state,
        token: authProfile.token,
        authenticated: true,
      });
    }

    case UserSessionActionTypes.SignupError: {
      return {
        ...state,
        token: undefined,
        authenticated: false,
      };
    }

    case UserSessionActionTypes.Logout: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
}
