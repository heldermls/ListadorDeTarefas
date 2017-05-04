import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Login } from './login';
import { Registrar } from "../registrar/registrar";

@NgModule({
  declarations: [
    Login,
    Registrar
  ],
  imports: [
    IonicPageModule.forChild(Login),
  ],
  exports: [
    Login,
    Registrar
  ]
})
export class LoginModule {}
