import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {AuthenticationProfile} from '../../features/home/models/authentication-profile.model';
import {HttpClient} from '@angular/common/http';
import {LocalStorageService} from 'angular-2-local-storage';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient,
              private localStorageService: LocalStorageService) {
  }

  /**
   * Signin an user.
   * @param {AuthenticationProfile} auth
   * @returns {Observable<AuthenticationProfile>}
   */
  signin(auth: AuthenticationProfile): Observable<AuthenticationProfile> {
    return this.http.post<AuthenticationProfile>(
      `${environment.baseUrl()}/signin`, {
        email: auth.email,
        password: auth.password,
      },
    );
  }

  /**
   * Signup an user.
   * @param auth
   * @returns {Observable<AuthenticationProfile>}
   */
  signup(auth): Observable<AuthenticationProfile> {
    return this.http.post<AuthenticationProfile>(
      `${environment.baseUrl()}/signup`, {
        email: auth.email,
        password: auth.password,
        lastname: auth.lastName,
        firstname: auth.firstName,
        isCoach: auth.isCoach
      },
    );
  }

  /**
   * Logout an user by clearing LocalStorage.
   */
  logout(): void {
    this.localStorageService.remove('profile');
  }

  /**
   * Check if token is not expired.
   * @returns {boolean}
   */
  public authenticated(): boolean {
    const jwtHelper: JwtHelperService = new JwtHelperService();
    const {token} = this.localStorageService.get('profile');
    return token && !jwtHelper.isTokenExpired(token);
  }
}
