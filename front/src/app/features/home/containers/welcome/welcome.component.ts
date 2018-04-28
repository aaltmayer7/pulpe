import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }


  ngOnInit(): void {
  }

}
