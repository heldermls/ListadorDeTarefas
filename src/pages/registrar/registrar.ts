import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from "../../providers/login-provider";
import { Credencial } from "../../model/credencial";

/**
 * Generated class for the Registrar page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class Registrar {
  credencial:Credencial;
  constructor(public navCtrl: NavController, public navParams: NavParams, public loginProvider: LoginProvider) {
  this.credencial = new Credencial();
}

  ionViewDidLoad() {
   
  }
  doRegister(){
    this.loginProvider.registrarUsuario(this.credencial);
  }
}
