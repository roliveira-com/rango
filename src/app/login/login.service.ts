import {Router} from '@angular/router'
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {RANGO_API} from '../app.api';
import {User} from './user.model'

@Injectable()
export class LoginService{

  user: User;

  constructor(private api: HttpClient, private router: Router) {}

  isLoggedIn(): boolean{
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User>{
    return this.api.post<User>(`${RANGO_API}/login`, {email: email, password: password})
                    // depois do post, associa o objeto de resposta a propriedade this.user
                   .do(user => this.user = user);
    
  }

  handleLogin(path?: string) {
    this.router.navigate(['/login', path]);
  }
}