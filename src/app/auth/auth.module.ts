import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { RecoverComponent } from './recover.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from './auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatIconModule
  ],
  providers: [ AuthService ],
  declarations: [LoginComponent, RegisterComponent, RecoverComponent, ListComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
