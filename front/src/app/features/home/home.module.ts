import {NgModule} from '@angular/core';
import {HomeComponent} from './containers/home/home.component';
import {SharedModule} from '../../shared/shared.module';
import {HomeRoutingModule} from './home-routing.module';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {WelcomeComponent} from './containers/welcome/welcome.component';
import {SigninComponent} from './containers/signin/signin.component';
import {SignupComponent} from './containers/signup/signup.component';
import {SigninFormComponent} from './components/signin-form/signin-form.component';
import {SignupFormComponent} from './components/signup-form/signup-form.component';
import {WelcomeContentComponent} from './components/welcome-content/welcome-content.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {userSessionReducer} from './store/user-session.reducer';
import {UserSessionEffects} from './store/user-session.effect';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    StoreModule.forFeature('userSession', userSessionReducer),
    EffectsModule.forFeature([UserSessionEffects]),
  ],
  declarations: [
    HomeComponent,
    WelcomeComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeContentComponent,
    SigninComponent,
    SignupComponent,
    SigninFormComponent,
    SignupFormComponent,
    SidenavComponent,
    HeaderComponent,
  ],
})
export class HomeModule {
}
