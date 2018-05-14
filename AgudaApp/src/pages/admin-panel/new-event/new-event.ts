import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { CalendarEventProvider } from '../../../providers/calendar-event/calendar-event';
import { CalendarEvent } from '../../../models/calendarEvent.model';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  yearOffset = new Date().getFullYear() + 2;

  inputEvent: CalendarEvent;

  headline: string;
  date: string;
  content: string;
  imageUrl: string = "";
  purchaseURL: string = "";

  pageTitle = "אירוע חדש";
  actionButton = "הוספה";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              public eventProvider: CalendarEventProvider,
              private toastCtrl: ToastController,
              private auth: AuthProvider) {

                this.inputEvent = this.navParams.get('event');
                if(this.inputEvent != null){
                  this.headline = this.inputEvent.headline;
                  this.date = this.inputEvent.date.replace(" ", "T").replace("/", "-").replace("/", "-") + "Z";
                  this.content = this.inputEvent.content;
                  this.imageUrl = this.inputEvent.imageURL;
                  this.purchaseURL = this.inputEvent.purchaseURL;
                  this.pageTitle = "ערוך אירוע";
                  this.actionButton = "ערוך";
                }
  }

  ionViewCanEnter(){
    return this.auth.isSignedIn() && document.URL.includes('adminpanel');
  }

  async save(){
    if(this.actionButton === "הוספה"){
      this.addEvent();
    } else {
      this.editEvent();
    }
  }

  async addEvent(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.eventProvider.addEvent(new CalendarEvent(this.imageUrl, this.date.replace("T", " ").replace("Z", "").replace("-", "/").replace("-", "/"), this.headline, this.content, this.purchaseURL, false))
      .then(() => {
        toastOpt.message = 'האירוע נוסף בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  async editEvent(){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.eventProvider.editEvent(this.inputEvent.setParams(this.imageUrl, this.date.replace("T", " ").replace("Z", "").replace("-", "/").replace("-", "/"), this.headline, this.content, this.purchaseURL))
      .then(() => {
        toastOpt.message = 'האירוע נערך בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
    this.viewCtrl.dismiss();
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  uploadFile(event){
    console.log(event);
    const file = <File>event.target.files[0];
    console.log(file.name);
    //not done - do not touch
  }
}
