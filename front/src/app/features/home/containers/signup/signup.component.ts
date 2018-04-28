import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class SignupComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
