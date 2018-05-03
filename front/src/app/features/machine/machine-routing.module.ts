import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachinesComponent} from './containers/machines/machines.component';
import {CoachGuard} from '../../core/guards/coach.guard';
import {MachinesGuard} from './guards/machines.guard';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent,
    canActivate: [CoachGuard, MachinesGuard],
    data: {
      title: 'Liste des machines',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineRoutingModule {
}
