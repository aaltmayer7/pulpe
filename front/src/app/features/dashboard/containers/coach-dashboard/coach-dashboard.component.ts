import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-coach-dashboard',
  templateUrl: './coach-dashboard.component.html',
  styleUrls: ['./coach-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoachDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
