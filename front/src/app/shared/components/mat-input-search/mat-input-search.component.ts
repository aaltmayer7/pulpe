import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'pulpe-mat-input-search',
  templateUrl: './mat-input-search.component.html',
  styleUrls: ['./mat-input-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatInputSearchComponent implements OnInit {
  @Input() placeholder: string = 'Rechercher';
  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onFilter(filter: string): void {
    this.filter.emit(filter);
  }
}
