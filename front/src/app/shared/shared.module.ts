import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxErrorsModule} from '@ultimate/ngxerrors';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {IntervalDatesComponent} from './components/interval-dates/interval-dates.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgxErrorsModule,
    MaterialModule,
    ReactiveFormsModule,
    IntervalDatesComponent,
  ],
  declarations: [IntervalDatesComponent]
})
export class SharedModule {
}
