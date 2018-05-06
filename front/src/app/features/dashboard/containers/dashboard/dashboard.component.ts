import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UserSessionState} from '../../../home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';
import {selectAuthProfile} from '../../../home/store/user-session.selectors';
import {AuthenticationProfile} from '../../../auth/models/authentication-profile.model';

@Component({
  selector: 'pulpe-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class DashboardComponent implements OnInit {
  authProfile$: Observable<AuthenticationProfile>;

  constructor(private store: Store<UserSessionState>) {
  }

  ngOnInit(): void {
    this.authProfile$ = this.store.select(selectAuthProfile);
  }

}
