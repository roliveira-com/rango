import {CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';

import {LoginService} from './login.service';

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  constructor(private loginService: LoginService){}

  // retorna um booleano infromando se o usuario esta 
  // autenticado ou não
  checkAuth(path: string): boolean{
    const logged = this.loginService.isLoggedIn();
    if (!logged) {
      this.loginService.handleLogin(`/${path}`);
    }
    return logged; 
  }

  // Usado pra determinar se um determinado módulo pode ser carregado ou não
  // Assim, bloqueamo o acesso do usuário a página que ele controla
  // É implementado usado a interface CanLoad do módulo @angular/router
  // É necessaria adição da propriedade canLoad na configuração desta rota 
  canLoad(route: Route): boolean {
    return this.checkAuth(route.path);
  }

  // Usado para determinar de um módulo especifico pode ser ativado.
  // Ele é mais eficiente que o canLoad já que, no anterior, uma vez
  // carregado o módulo pode sempre ser usado. Já aqui, ele evita que 
  // o módulo seja ativado propriamente, mesmo após ele tiver sido carregado
  // É implementado usado a interface CanActivate do módulo @angular/router
  // É necessária adição da propriedade canActivate na configuração desta rota 
  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
    return this.checkAuth(activatedRoute.routeConfig.path);
  }

}
