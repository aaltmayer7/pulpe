import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'pulpe-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
