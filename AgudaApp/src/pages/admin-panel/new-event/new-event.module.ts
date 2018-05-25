import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewEventPage } from './new-event';
import { QuillModule, QUILL_CONFIG, QuillConfigInterface } from 'ngx-quill-wrapper';

let config: QuillConfigInterface = {
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],                  // toggled buttons
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
    ],
  },
};

@NgModule({
  declarations: [
    NewEventPage,
  ],
  imports: [
    QuillModule,
    IonicPageModule.forChild(NewEventPage),
  ],
  providers: [
    {
      provide: QUILL_CONFIG,
      useValue: config
    }
  ]
})
export class NewEventPageModule {}
