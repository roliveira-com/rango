import {HttpInterceptor, HttpRequest, HttpEvent, HttpHandler} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';

import {LoginService} from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    const loginService = this.injector.get(LoginService);

    if(loginService.isLoggedIn()){
      const authRequest = request.clone(
        {setHeaders: {'Authorization': `Bearer ${loginService.user.token}`}}
      );
      return next.handle(authRequest);
    }else{
      return next.handle(request);
    }
  }

}
