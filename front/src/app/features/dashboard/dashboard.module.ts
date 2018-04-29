import {NgModule} from '@angular/core';
import {DashboardComponent} from './containers/dashboard/dashboard.component';
import {SharedModule} from '../../shared/shared.module';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { CoachDashboardComponent } from './containers/coach-dashboard/coach-dashboard.component';
import { MemberDashboardComponent } from './containers/member-dashboard/member-dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    CoachDashboardComponent,
    MemberDashboardComponent,
  ]
})
export class DashboardModule {
}
