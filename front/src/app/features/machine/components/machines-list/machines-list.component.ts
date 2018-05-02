import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
