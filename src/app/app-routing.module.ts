import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingUpComponent } from './auth/sing-up/sing-up.component';

const routes: Routes = [
  { path: 'signup', component: SingUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
