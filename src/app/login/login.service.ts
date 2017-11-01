import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';

import {RANGO_API} from '../app.api';
import {User} from './user.model'

@Injectable()
export class LoginService{

  user: User;

  constructor(private api: HttpClient) {}

  isLoggedIn(): boolean{
    return this.user !== undefined;
  }

  login(email: string, password: string): Observable<User>{
    return this.api.post<User>(`${RANGO_API}/login`, {email: email, password: password})
                    // depois do post, associa o objet de resosta a propriedade this.user
                   .do(user => this.user = user);
    
  }
}