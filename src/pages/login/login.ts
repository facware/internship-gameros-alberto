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

  @ViewChild('email') uname;
  @ViewChild('pswd') passw;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentAlert( mensaje) {
    let alert = this.alertCtrl.create({
      title: mensaje,
      subTitle: 'Presiona OK para continuar',
      buttons: ['OK']
    });
    alert.present();
  }
  

  goRegistrar(){
    this.navCtrl.push(RegistroPage);
  }
  
  iniciarSesion(){
    var ulog=new Array();
    ulog[0] = [this.uname.value];
    ulog[1] = [this.passw.value];
    //Primero comprovamos que los campos no esten vacios
    if (ulog[0].toString().length > 0 && ulog[0].toString().length > 0) {
      //Despues comprovamos que "existe" la cuenta
      if (this.uname.value == "c.alberto.gameros.b@gmail.com" && this.passw.value == "123123") {
        this.presentAlert("Sesión iniciada correctamente");
        this.navCtrl.setRoot(TabPrincipalPage);
      } else {
        this.presentAlert("Campos invalidos, revise e intentelo nuevamente")
      }
    } else {
      this.presentAlert("Faltaron algunos campos")
    }

    
    
  }

}
