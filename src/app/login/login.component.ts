import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private form: FormBuilder) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      email: this.form.control('', [Validators.required, Validators.email]),
      password: this.form.control('', [Validators.required])
    })

  }



}