import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntryScreenPage } from './entry-screen';

@NgModule({
  declarations: [
    EntryScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(EntryScreenPage),
  ],
})
export class EntryScreenPageModule {}
