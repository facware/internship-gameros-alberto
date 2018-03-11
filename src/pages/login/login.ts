import { TabPrincipalPage } from './../tabPrincipal/tabPrincipal';
import { MyApp } from './../../app/app.component';
import { RegistroPage } from './../registro/registro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
  ma:MyApp;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goRegistrar(){
    this.navCtrl.push(RegistroPage);
  }
  
  iniciarSesion(){
       this.navCtrl.setRoot(TabPrincipalPage);
  }

}
