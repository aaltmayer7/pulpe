import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdherentsComponent} from './containers/adherents/adherents.component';

const routes: Routes = [
  {
    path: '',
    component: AdherentsComponent,
    data: {
      title: 'Liste des adhérents',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdherentRoutingModule {
}
