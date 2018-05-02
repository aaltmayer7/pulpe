import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExercicesComponent} from './containers/exercices/exercices.component';

const routes: Routes = [
  {
    path: '',
    component: ExercicesComponent,
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
