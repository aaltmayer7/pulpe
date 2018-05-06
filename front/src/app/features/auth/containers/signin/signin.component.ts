import {Component, OnInit, ChangeDetectionStrategy, Renderer2} from '@angular/core';
import {UserSessionState} from '../../../home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {AuthenticationProfile} from '../../models/authentication-profile.model';
import {Signin} from '../../../home/store/user-session.action';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class SigninComponent implements OnInit {

  constructor(private store: Store<UserSessionState>,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'landing-page');
  }

  onSignin(authProfile: AuthenticationProfile): void {
    this.store.dispatch(new Signin(authProfile));
  }
}
