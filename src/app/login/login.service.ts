import {Router, NavigationEnd} from '@angular/router'
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
//import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

import {RANGO_API} from '../app.api';
import {User} from './user.model'

@Injectable()
export class LoginService{

  user: User;
  lastUrl: string;

  constructor(private api: HttpClient, private router: Router) {
    // usando os eventos de navegação diparados por Router
    // para obter a ultima url navegada e usá-la como padrão
    // no método handleLogin(). Isto evita que, se o usuário for
    // para a página de login através do link login, este parâmetro
    // não seja undefined e dê erro 404 =>
    this.router.events.filter(evt => evt instanceof NavigationEnd)
                      .subscribe( (evt: NavigationEnd) => this.lastUrl = evt.url);
  }

  isLoggedIn(): boolean{
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User>{
    return this.api.post<User>(`${RANGO_API}/login`, {email: email, password: password})
                    // depois do post, associa o objeto de resposta a propriedade this.user
                   .do(user => this.user = user);
  }

  logout(){
    this.user = undefined;
  }

  // definindo o path padrao caso nenhum seja passado
  // Aqui, caso o parametro path não seja passado, ou seja,
  // o usuario não seja redirecionado a página de login pelo
  // CanLoad no login.guard.ts, a ultima url visitada obttida acima
  // seja usada por padrão ;-)
  handleLogin(path: string = this.lastUrl) {
    // a função nativa do JS btoa() encoda o path
    // para uma apresentação mais amigável (se é que vc considera hash amigável)
    this.router.navigate(['/login', btoa(path)]);
  }
}
