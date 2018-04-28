import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'pulpe-welcome-content',
  templateUrl: './welcome-content.component.html',
  styleUrls: ['./welcome-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeContentComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
