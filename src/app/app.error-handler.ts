// O Http CLient possui a propria classe de resposta
// import {Response} from '@angular/http';
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs;

import {NotificationService} from './shared/messages/notification.service';
import {LoginService} from './login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler{

  constructor(
    private ns: NotificationService, 
    private injector: Injector,
    private zone: NgZone
  ){
    super();
  }

  handleError(errorResponse: HttpErrorResponse | any){
    if(errorResponse instanceof HttpErrorResponse){
      const message = errorResponse.message;
      this.zone.run(() => {
        switch (errorResponse.status) {
          case 401:
            this.injector.get(LoginService).handleLogin();
            break;
          case 403:
            this.ns.notify(message || 'Não Auorizado');
            break;
          case 404:
            this.ns.notify(message || 'Não Encontrado');
            break;
        }
      })

    }
    super.handleError(errorResponse)
  }

}