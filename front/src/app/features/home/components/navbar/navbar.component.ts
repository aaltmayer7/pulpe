import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pulpe-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  @Output() toggled: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(): void {
    this.toggled.emit();
  }
}
