import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
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
  navigateTo: string

  constructor(
    private form: FormBuilder,
    private loginService: LoginService,
    private notification: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: this.form.control('', [Validators.required, Validators.email]),
      password: this.form.control('', [Validators.required])
    })
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || '/'
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        // callback de sucesso
        user => this.notification.notify(`Bem Vindo, ${user.name}`),
        // callback de erro
        response => this.notification.notify(response.error.message),
        // callback para quando o subscribe terminar
        () => this.router.navigate([this.navigateTo])
      );
  }

}
