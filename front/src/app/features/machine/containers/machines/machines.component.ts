import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
