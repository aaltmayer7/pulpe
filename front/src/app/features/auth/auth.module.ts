import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {SignupFormComponent} from './components/signup-form/signup-form.component';
import {SigninComponent} from './containers/signin/signin.component';
import {SignupComponent} from './containers/signup/signup.component';
import {SigninFormComponent} from './components/signin-form/signin-form.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  exports: [
    SigninComponent,
    SignupComponent,
    SigninFormComponent,
    SignupFormComponent
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    SigninFormComponent,
    SignupFormComponent
  ]
})
export class AuthModule {
}
