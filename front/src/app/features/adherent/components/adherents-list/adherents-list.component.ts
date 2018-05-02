import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-adherents-list',
  templateUrl: './adherents-list.component.html',
  styleUrls: ['./adherents-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdherentsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
