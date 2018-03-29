import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/*import { FileOpener } from '@ionic-native/file-opener';*/
/**
 * Generated class for the PdfviewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pdfviewer',
  templateUrl: 'pdfviewer.html',
})

export class PdfviewerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewerPage');
  }

  /*abrirPDF(){
    this.fileOpener.open('D:/IonicProyects/appmagazine/src/assets/pdf/am.pdf','aplication/pdf').then(() => console.log("Archivo abierto")).catch(e => console.log("Error: ",e))
  }*/
}
