import {NgModule} from '@angular/core';
import {MachinesListComponent} from './components/machines-list/machines-list.component';
import {MachinesComponent} from './containers/machines/machines.component';
import {SharedModule} from '../../shared/shared.module';
import {MachineRoutingModule} from './machine-routing.module';
import {MachinesService} from './services/machines.service';
import {machineReducer} from './store/machine.reducer';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {MachineEffects} from './store/machine.effect';
import {MachinesGuard} from './guards/machines.guard';

@NgModule({
  imports: [
    SharedModule,
    MachineRoutingModule,
    StoreModule.forFeature('machine', machineReducer),
    EffectsModule.forFeature([MachineEffects]),
  ],
  declarations: [
    MachinesListComponent,
    MachinesComponent
  ],
  providers : [
    MachinesService,
    MachinesGuard,
  ]
})
export class MachineModule {
}
