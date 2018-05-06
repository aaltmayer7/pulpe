import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {OverlayModule} from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    OverlayModule,
  ],
  exports: [
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSidenavModule,
    MatSelectModule,
    MatListModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatChipsModule,
    MatSlideToggleModule,
    OverlayModule,
  ],
  declarations: [],
})
export class MaterialModule {
  constructor() {
  }
}
