import {NgModule} from '@angular/core';
import {ExercicesComponent} from './containers/exercices/exercices.component';
import {ExercicesListComponent} from './components/exercices-list/exercices-list.component';
import {SharedModule} from '../../shared/shared.module';
import {ExerciceRoutingModule} from './exercice-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ExerciceRoutingModule
  ],
  declarations: [
    ExercicesComponent,
    ExercicesListComponent
  ]
})
export class ExerciceModule {
}
