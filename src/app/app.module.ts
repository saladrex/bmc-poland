import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { RecoverComponent } from './auth/recover.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import * as firebase from 'firebase';
import { ListComponent } from './auth/list.component';

const config = {
    apiKey: 'AIzaSyAduqkAphREauzd_JVQMmrry2QCceDsEq4',
    authDomain: 'bmc-poland.firebaseapp.com',
    databaseURL: 'https://bmc-poland.firebaseio.com',
    projectId: 'bmc-poland',
    storageBucket: 'bmc-poland.appspot.com',
    messagingSenderId: '410874607402'
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AuthModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'recover', component: RecoverComponent },
      { path: 'list', component: ListComponent },
          ]),
    // MOSHES
    // AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
