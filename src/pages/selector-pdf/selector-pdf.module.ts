import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectorPdfPage } from './selector-pdf';

@NgModule({
  declarations: [
    SelectorPdfPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectorPdfPage),
  ],
})
export class SelectorPdfPageModule {}
