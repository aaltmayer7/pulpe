import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatSidenav} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {AuthenticationProfile} from '../../models/authentication-profile.model';
import {UserSessionState} from '../../store/user-session.reducer';
import {Store} from '@ngrx/store';
import {selectAuthProfile} from '../../store/user-session.selectors';
import {selectTitle} from '../../../../core/store/router.selector';
import {RouterState} from '@angular/router';

@Component({
  selector: 'pulpe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSidenav) sideNav;

  authProfile$: Observable<AuthenticationProfile>;
  title$: Observable<string>;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private userSessionStore: Store<UserSessionState>,
              private routerStore: Store<RouterState>,
              private changeDetectorRef: ChangeDetectorRef,
              private media: MediaMatcher) {
  }

  ngOnInit(): void {
    this.authProfile$ = this.userSessionStore.select(selectAuthProfile);
    this.title$ = this.routerStore.select(selectTitle);

    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  onToggle(): void {
    this.sideNav.toggle();
  }
}
