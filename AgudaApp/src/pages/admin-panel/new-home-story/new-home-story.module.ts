import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHomeStoryPage } from './new-home-story';

@NgModule({
  declarations: [
    NewHomeStoryPage,
  ],
  imports: [
    IonicPageModule.forChild(NewHomeStoryPage),
  ],
})
export class NewHomeStoryPageModule {}
