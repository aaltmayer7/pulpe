import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {UserSessionState} from '../../../home/store/user-session.reducer';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {selectIsCoach} from '../../../home/store/user-session.selectors';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class DashboardComponent implements OnInit {
  isCoach$: Observable<boolean>;

  constructor(private store: Store<UserSessionState>) {
  }

  ngOnInit(): void {
    this.isCoach$ = this.store.select(selectIsCoach);
  }

}
