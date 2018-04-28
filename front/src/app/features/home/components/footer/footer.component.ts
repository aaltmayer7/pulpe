import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'pulpe-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  date: Date;

  constructor() {
  }

  ngOnInit(): void {
    this.date = new Date();
  }

}
