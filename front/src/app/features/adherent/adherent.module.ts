import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdherentsComponent} from './containers/adherents/adherents.component';
import {AdherentsListComponent} from './components/adherents-list/adherents-list.component';
import {SharedModule} from '../../shared/shared.module';
import {AdherentRoutingModule} from './adherent-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AdherentRoutingModule
  ],
  declarations: [
    AdherentsComponent,
    AdherentsListComponent
  ]
})
export class AdherentModule {
}
