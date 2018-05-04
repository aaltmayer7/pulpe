import {Component, OnInit, ChangeDetectionStrategy, Renderer2} from '@angular/core';
import {fadeIn} from '../../../../shared/animations/fade-in.animation';
import {Renderer3} from '@angular/core/src/render3/renderer';

@Component({
  selector: 'pulpe-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeIn]
})
export class WelcomeComponent implements OnInit {

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'landing-page');
  }
}
