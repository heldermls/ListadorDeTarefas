import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from "../pages/login/login";
import { LoginProvider } from "../providers/login-provider";
import { Registrar } from "../pages/registrar/registrar";
import { HttpModule } from '@angular/http';
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDt6W0TKY3-3cfWK1YBe7XZ9ggxXJgVd7U",
    authDomain: "listador-de-tarefas-60b83.firebaseapp.com",
    databaseURL: "https://listador-de-tarefas-60b83.firebaseio.com",
    projectId: "listador-de-tarefas-60b83",
    storageBucket: "listador-de-tarefas-60b83.appspot.com",
    messagingSenderId: "476565349398"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  providers: [
    LoginProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseConfig);
  }
}
