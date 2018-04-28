import {RouterModule, Routes} from '@angular/router';

import {NgModule} from '@angular/core';

export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: 'app/features/home/home.module#HomeModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
