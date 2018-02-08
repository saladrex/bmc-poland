import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recover',
  template: `
  <mat-card style="
  margin-top: 10vh;
  margin-left: 10vw;
  margin-right: 10vw;
  ">
  <mat-card-header>
    <mat-card-title>Recover</mat-card-title>
  </mat-card-header>
  <mat-card-content>
    <form
    [formGroup]="recoverForm"
    (ngSubmit)="auth.recover(recoverForm.value)"
    class="example-form">
      <mat-form-field class="example-full-width">
        <input matInput
        formControlName="email"
        placeholder="email">
      </mat-form-field>

      <button mat-raised-button type="submit">Recover</button>
    </form>
  </mat-card-content>
  </mat-card>
  `,
  styles: []
})
export class RecoverComponent implements OnInit {

  public recoverForm: FormGroup;
  public auth: AuthService;

  constructor(auth: AuthService) {
    this.auth = auth;
   }

  ngOnInit() {
    this.recoverForm = new FormGroup({
      email: new FormControl,
    });
  }

}
