import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';
import {Observable} from 'rxjs/Observable';
import {Adherent} from '../../models/adherent.model';
import {AdherentState} from '../../store/adherent.reducer';
import {Store} from '@ngrx/store';
import {selectAllAdherents} from '../../store/adherent.selectors';

@Component({
  selector: 'pulpe-adherents',
  templateUrl: './adherents.component.html',
  styleUrls: ['./adherents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class AdherentsComponent implements OnInit {
  adherents$: Observable<Adherent[]>;

  constructor(private adherentStore: Store<AdherentState>) {
  }

  ngOnInit(): void {
    this.adherents$ = this.adherentStore.select(selectAllAdherents);
  }
}
