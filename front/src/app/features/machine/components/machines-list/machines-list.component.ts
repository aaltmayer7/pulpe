import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Machine} from '../../models/machine.model';

@Component({
  selector: 'pulpe-machines-list',
  templateUrl: './machines-list.component.html',
  styleUrls: ['./machines-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MachinesListComponent implements OnInit {
  @Input() machines: Machine[];

  constructor() {
  }

  ngOnInit() {
  }

}
