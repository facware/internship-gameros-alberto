import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdfSelectorPage } from './pdf-selector';

@NgModule({
  declarations: [
    PdfSelectorPage,
  ],
  imports: [
    IonicPageModule.forChild(PdfSelectorPage),
  ],
})
export class PdfSelectorPageModule {}
