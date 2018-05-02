import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pulpe-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercicesListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
