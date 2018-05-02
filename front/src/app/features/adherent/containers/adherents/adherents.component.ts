import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-adherents',
  templateUrl: './adherents.component.html',
  styleUrls: ['./adherents.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdherentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
