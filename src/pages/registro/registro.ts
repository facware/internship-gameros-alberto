import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
/*
  this.datePicker.show({
    date: new Date(),
    mode: 'date',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
  }).then(
    date => console.log('Got date: ', date),
    err => console.log('Error occurred while getting date: ', err)
  );*/
}
