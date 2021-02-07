import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    SingUpComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
