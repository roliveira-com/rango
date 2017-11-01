import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {NotificationService} from '../shared/messages/notification.service'
import {LoginService} from './login.service';
import {User} from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder, private loginService: LoginService, private notification: NotificationService) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: this.form.control('', [Validators.required, Validators.email]),
      password: this.form.control('', [Validators.required])
    })

  }

  login(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        // callback de sucesso
        user => this.notification.notify(`Bem Vindo, ${user.name}`),
        // callback de erro
        response => this.notification.notify(response.error.message)
      );
  }

}
