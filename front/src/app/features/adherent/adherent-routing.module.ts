import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdherentsComponent} from './containers/adherents/adherents.component';
import {CoachGuard} from '../../core/guards/coach.guard';
import {AdherentsGuard} from './guards/adherents.guard';

const routes: Routes = [
  {
    path: '',
    component: AdherentsComponent,
    canActivate: [CoachGuard, AdherentsGuard],
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
