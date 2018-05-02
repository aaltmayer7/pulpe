import {NgModule} from '@angular/core';
import {MachinesListComponent} from './components/machines-list/machines-list.component';
import {MachinesComponent} from './containers/machines/machines.component';
import {SharedModule} from '../../shared/shared.module';
import {MachineRoutingModule} from './machine-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MachineRoutingModule
  ],
  declarations: [
    MachinesListComponent,
    MachinesComponent
  ]
})
export class MachineModule {
}
