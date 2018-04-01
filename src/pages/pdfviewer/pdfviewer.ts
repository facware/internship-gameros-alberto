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
  url:string;
  constructor(public navCtrl: NavController, public navParams: NavParams  ) {
    this.url ="../../assets/pdf/am.pdf";
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdfviewerPage');
  }
  cargarPDF(){
    //var t=new HTMLDocument;
    var jf= document.getElementById("pdf");
    jf.setAttribute("src",this.url);
    jf.replaceChild.apply(jf);

  }

  
}
