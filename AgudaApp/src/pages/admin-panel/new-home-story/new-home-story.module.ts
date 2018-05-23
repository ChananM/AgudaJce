import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHomeStoryPage } from './new-home-story';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    NewHomeStoryPage,
  ],
  imports: [
    EditorModule,
    IonicPageModule.forChild(NewHomeStoryPage),
  ],
})
export class NewHomeStoryPageModule {}
