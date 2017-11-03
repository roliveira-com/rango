import { Component, OnInit } from '@angular/core';

import {LoginService} from '../../login/login.service';
import {User} from '../../login/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  user(): User{
    return this.loginService.user;
  }

  isLoggedIn():boolean {
    return this.loginService.isLoggedIn();
  }

  login(){
    this.loginService.handleLogin();
  }

  logout(){
    this.loginService.logout();
  }

}
