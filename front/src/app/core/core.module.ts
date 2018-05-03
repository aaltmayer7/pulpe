import {LOCALE_ID, NgModule, Optional, SkipSelf} from '@angular/core';
import {ToastrModule} from 'ngx-toastr';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgProgressHttpModule} from '@ngx-progressbar/http';
import {NgProgressModule} from '@ngx-progressbar/core';
import {RouterEffects} from './store/router.effect';
import {metaReducers, reducers} from './store/app.reducer';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {LocalStorageModule} from 'angular-2-local-storage';
import {CustomSerializer} from './store/router.reducer';
import {AuthService} from './services/auth.service';
import {CoachGuard} from './guards/coach.guard';
import {AuthenticateGuard} from './guards/authenticate.guard';
import {JwtModule} from '@auth0/angular-jwt';
import {MatPaginatorIntl} from '@angular/material';
import {CustomPaginator} from '../shared/provides/paginator.custom';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreRouterConnectingModule,
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument({maxAge: 10}),

    NgProgressModule.forRoot({
      spinnerPosition: 'left',
      color: '#FFFFFF',
      thick: false
    }),

    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return JSON.parse(localStorage.getItem('profile')).token;
        },
        headerName: 'authorization',
        whitelistedDomains: ['localhost:5000']
      }
    }),

    LocalStorageModule.withConfig({
      prefix: '',
      storageType: 'localStorage'
    }),

    ToastrModule.forRoot()
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    NgProgressModule,
    NgProgressHttpModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    {provide: RouterStateSerializer, useClass: CustomSerializer},
    {provide: MatPaginatorIntl, useClass: CustomPaginator},
    // Singleton services
    AuthService,
    CoachGuard,
    AuthenticateGuard
  ],
})
export class CoreModule {
  constructor(@Optional()
              @SkipSelf()
                parentModule: CoreModule,) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${
        moduleName
        } has already been loaded. Import Core modules in the AppModule only.`,
    );
  }
}

