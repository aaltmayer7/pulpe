import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-member-dashboard',
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
