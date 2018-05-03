import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxErrorsModule} from '@ultimate/ngxerrors';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {IntervalDatesComponent} from './components/interval-dates/interval-dates.component';
import {MatInputSearchComponent} from './components/mat-input-search/mat-input-search.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    NgxErrorsModule,
    MaterialModule,
    ReactiveFormsModule,
    IntervalDatesComponent,
    MatInputSearchComponent,
  ],
  declarations: [
    IntervalDatesComponent,
    MatInputSearchComponent,
  ],
})
export class SharedModule {
}
