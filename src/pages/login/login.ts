import { RegistroPage } from './../registro/registro';

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabPrincipalPage } from '../tab-principal/tab-principal';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  
})
export class LoginPage {

  userlog=[{'email':'','contraseña':''}];
  @ViewChild('email') uname;
  @ViewChild('pswd') passw;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert( ) {
    let alert = this.alertCtrl.create({
      title: 'Estas Dentro',
      subTitle: 'Presiona OK para continuar',
      buttons: ['OK']
    });
    alert.present();
  }
  

  goRegistrar(){
    this.navCtrl.push(RegistroPage);
  }
  
  iniciarSesion(){
    console.log(this.uname.value, this.passw.value)
    this.userlog = [{ 'email': this.uname.value,'contraseña':this.passw.value}]
    if (this.userlog.values!==null) {
      this.presentAlert();
      this.navCtrl.setRoot(TabPrincipalPage);
    } else {
      let alert = this.alertCtrl.create({
        title: 'Faltaron datos o no se reconoce usuario',
        subTitle: 'Presiona OK para volver a intentarlo',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }

}
