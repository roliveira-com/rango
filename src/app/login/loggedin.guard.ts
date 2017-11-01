import {CanLoad, Route} from '@angular/router';
import {Injectable} from '@angular/core';

import {LoginService} from './login.service';

@Injectable()
export class LoggedInGuard implements CanLoad {

  constructor(private loginService: LoginService){}

  canLoad(route: Route): boolean {

    const logged = this.loginService.isLoggedIn();

    if (!logged) {
      this.loginService.handleLogin(`/${route.path}`);
    }

    return logged;

  }

}
