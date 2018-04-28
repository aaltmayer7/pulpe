import {Component} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    registerLocaleData(fr, 'fr');
  }
}
