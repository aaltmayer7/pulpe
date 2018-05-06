import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {AuthenticationProfile} from '../../../auth/models/authentication-profile.model';

const IMG_DIR = '../../../../../assets';

@Component({
  selector: 'pulpe-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Input() authProfile: AuthenticationProfile;

  routes: Nav[];
  logo: string;

  constructor() {
  }

  ngOnInit(): void {
    this.logo = `${IMG_DIR}/img/logo-full.png`;
    if (this.authProfile.isCoach) {
      this.routes = this.coachRoutes;
    } else {
      this.routes = this.memberRoutes;
    }
  }

  private get coachRoutes(): Nav[] {
    return [
      {
        label: 'Accueil',
        path: '/home',
        exact: true,
        iconClasses: 'fa fa-home'
      },
      {
        label: 'Adhérents',
        path: '/adherents',
        exact: true,
        iconClasses: 'fa fa-users'
      },
      {
        label: 'Machines',
        path: '/machines',
        exact: true,
        iconClasses: 'fa fa-users'
      },
      {
        label: 'Exercices',
        path: '/exercices',
        exact: true,
        iconClasses: 'fa fa-users'
      }
    ];
  }

  private get memberRoutes(): Nav[] {
    return [];
  }

}


interface Nav {
  label: string;
  path: string;
  exact: boolean;
  iconClasses: string;
}
