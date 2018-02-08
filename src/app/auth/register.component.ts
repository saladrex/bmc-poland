import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  template: `
  <mat-card style="
  margin-top: 10vh;
  margin-left: 10vw;
  margin-right: 10vw;
  ">
  <mat-card-header>
    <mat-card-title>Register</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <form
    [formGroup]="registerForm"
    (ngSubmit)="auth.register(registerForm.value)"
    class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput
        formControlName="name"
        placeholder="name">
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <input matInput
        formControlName="email"
        placeholder="email">
      </mat-form-field>
      <mat-form-field class="example-full-width">
        <input matInput
        formControlName="password"
        placeholder="password" type="password">
      </mat-form-field>
      <button mat-raised-button type="submit">Register</button>
    </form>
  </mat-card-content>
  </mat-card>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
   }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl,
      email: new FormControl,
      password: new FormControl,
    });
  }

}
