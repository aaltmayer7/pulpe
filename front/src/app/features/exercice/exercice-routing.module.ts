import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExercicesComponent} from './containers/exercices/exercices.component';
import {CoachGuard} from '../../core/guards/coach.guard';

const routes: Routes = [
  {
    path: '',
    component: ExercicesComponent,
    canActivate: [CoachGuard],
    data: {
      title: 'Liste des exercices',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExerciceRoutingModule {
}
