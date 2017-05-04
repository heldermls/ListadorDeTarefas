import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Registrar } from "../registrar/registrar";
import { LoginProvider } from "../../providers/login-provider";
import { Credencial } from "../../model/credencial";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  credencial: Credencial;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loginProvider: LoginProvider) {
    this.credencial = new Credencial();
  }

  ionViewDidLoad() {
    
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => console.log(user),
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )

  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }
  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }
  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }
  sair(){
    this.loginProvider.sair();
  }
  doRegister(){
    this.navCtrl.push(Registrar);
  }
}
