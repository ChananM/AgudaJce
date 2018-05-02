import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { CalendarEventProvider } from '../../../providers/calendar-event/calendar-event';
import { CalendarEvent } from '../../../models/calendarEvent.model';

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  headline: string;
  date: string;
  content: string;
  imageUrl: string = "";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              public eventProvider: CalendarEventProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  async save(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.eventProvider.addEvent(new CalendarEvent(this.imageUrl, this.date.replace("T", " ").replace("Z", ""), this.headline, this.content, false))
      .then(() => {
        toastOpt.message = 'Event added successfully';
      })
      .catch(() => {
        toastOpt.message = 'Failed to add event';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}
