import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';

@Component({
  selector: 'pulpe-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
