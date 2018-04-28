import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UserSessionState} from '../../store/user-session.reducer';
import {Store} from '@ngrx/store';
import {AuthenticationProfile} from '../../models/authentication-profile.model';
import {Signin} from '../../store/user-session.action';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<UserSessionState>) {
  }

  ngOnInit(): void {
  }

  onSignin(authProfile: AuthenticationProfile): void {
    this.store.dispatch(new Signin(authProfile));
  }
}
