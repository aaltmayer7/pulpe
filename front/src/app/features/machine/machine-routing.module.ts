import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MachinesComponent} from './containers/machines/machines.component';

const routes: Routes = [
  {
    path: '',
    component: MachinesComponent,
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
