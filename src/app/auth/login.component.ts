import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <mat-card style="margin-top: 10vh; margin-left: 10vw; margin-right: 10vw;">
  <mat-card-header>
    <mat-card-title>Login</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <form [formGroup]="loginForm" (ngSubmit)="auth.login(loginForm.value)" class="example-form">
      <mat-form-field class="example-full-width">
        <input formControlName="email" matInput placeholder="email">
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <input
        formControlName="password"
        matInput placeholder="password" type="password">
      </mat-form-field>
      <button mat-raised-button type="submit">Login</button>
    </form>
  </mat-card-content>
  </mat-card>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

}
