import { File } from '@ionic-native/file';

import { PdfviewerPage } from './../pdfviewer/pdfviewer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp } from 'ionic-angular';
/**
 * Generated class for the PdfSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdf-selector',
  templateUrl: 'pdf-selector.html',
})


export class PdfSelectorPage {

  //Variables
  private directorio = [
    { 'name': 'AppMagazine' , 'path': '../../assets/imgs/AppMagazine.png' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadFiles()
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfSelectorPage');
  }
  goPDFViewer(){
    this.navCtrl.push(PdfviewerPage);
  }
  loadFiles(){
    for (let i = 0; i < 5; i++) {
      this.directorio.push( { 'name': 'Archivo ' + (i + 1), 'path':'../../assets/imgs/AppMagazine.png'})
    }
  }

}

