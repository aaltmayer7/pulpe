import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {AuthenticateGuard} from '../../core/guards/authenticate.guard';
import {WelcomeComponent} from './containers/welcome/welcome.component';
import {SigninComponent} from './containers/signin/signin.component';
import {SignupComponent} from './containers/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticateGuard],
    children: [
      {
        path: '',
        loadChildren: 'app/features/dashboard/dashboard.module#DashboardModule',
      },
    ],
  },
  {
    path: 'accueil',
    component: WelcomeComponent,
  },
  {
    path: 'connexion',
    component: SigninComponent,
  },
  {
    path: 'inscription',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
