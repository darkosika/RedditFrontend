import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
