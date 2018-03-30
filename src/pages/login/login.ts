import { RegistroPage } from './../registro/registro';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPrincipalPage } from '../tab-principal/tab-principal';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  goRegistrar(){
    this.navCtrl.push(RegistroPage);
  }
  
  iniciarSesion(){
    if (true) {
      this.navCtrl.setRoot(TabPrincipalPage);
    } else {
      
    }
    
  }

}
