import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';
import {AuthenticationProfile} from '../../models/authentication-profile.model';
import {UserSessionState} from '../../store/user-session.reducer';
import {Store} from '@ngrx/store';
import {Signup} from '../../store/user-session.action';

@Component({
  selector: 'pulpe-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class SignupComponent implements OnInit {

  constructor(private store: Store<UserSessionState>) {
  }

  ngOnInit(): void {
  }

  onSignup(authProfile: AuthenticationProfile): void {
    this.store.dispatch(new Signup(authProfile));
  }
}
