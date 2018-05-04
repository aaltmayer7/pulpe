import {NgModule} from '@angular/core';
import {AdherentsComponent} from './containers/adherents/adherents.component';
import {AdherentsListComponent} from './components/adherents-list/adherents-list.component';
import {SharedModule} from '../../shared/shared.module';
import {AdherentRoutingModule} from './adherent-routing.module';
import {AdherentsService} from './services/adherents.service';
import {AdherentsGuard} from './guards/adherents.guard';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AdherentsEffects} from './store/adherent.effect';
import {adherentReducer} from './store/adherent.reducer';

@NgModule({
  imports: [
    SharedModule,
    AdherentRoutingModule,
    StoreModule.forFeature('adherent', adherentReducer),
    EffectsModule.forFeature([AdherentsEffects]),
  ],
  declarations: [
    AdherentsComponent,
    AdherentsListComponent,
  ],
  providers: [
    AdherentsService,
    AdherentsGuard,
  ]
})
export class AdherentModule {
}
