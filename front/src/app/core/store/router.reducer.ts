import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Params,
} from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { isNullOrUndefined } from 'util';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
  title: string;
}

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const { url } = routerState;
    const { queryParams } = routerState.root;
    let state: ActivatedRouteSnapshot = routerState.root;
    while (!isNullOrUndefined(state.firstChild)) {
      state = state.firstChild;
    }
    const { params } = state;
    const { title } = state.data;
    return { url, queryParams, params, title };
  }
}
