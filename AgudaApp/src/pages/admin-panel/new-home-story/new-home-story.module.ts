import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewHomeStoryPage } from './new-home-story';
import { QuillModule, QUILL_CONFIG, QuillConfigInterface } from 'ngx-quill-wrapper';

let config: QuillConfigInterface = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],                  // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'align': [] }],                                // text alignment
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
    ],
  },
};

@NgModule({
  declarations: [
    NewHomeStoryPage,
  ],
  imports: [
    QuillModule,
    IonicPageModule.forChild(NewHomeStoryPage),
  ],
  providers: [
    {
      provide: QUILL_CONFIG,
      useValue: config
    }
  ]
})
export class NewHomeStoryPageModule { }
