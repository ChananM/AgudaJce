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
  tmpUrl: string = "";
  purchaseURL: string = "";

  pageTitle = "אירוע חדש";
  actionButton = "הוספה";

  imgFile: File = null;
  uploadPercent: number = null;
  allowed: boolean = true;
  fbImg: boolean = false;

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
                  this.tmpUrl = this.imageUrl;
                  this.purchaseURL = this.inputEvent.purchaseURL;
                  this.pageTitle = "ערוך אירוע";
                  this.actionButton = "ערוך";
                  if(this.imageUrl.includes('firebasestorage')){
                    this.tmpUrl = decodeURI(this.imageUrl.substring(this.imageUrl.indexOf('_')+1, this.imageUrl.indexOf('?')));
                    this.fbImg = true;
                  }
                }
  }

  ionViewDidLoad(){
    if(this.inputEvent == null){
      let e = document.getElementsByClassName('ql-direction')[0] as HTMLElement;
      e.click();
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
    if(this.imageUrl == "") {this.imageUrl = this.tmpUrl};
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
    if(this.imageUrl == "") {this.imageUrl = this.tmpUrl};
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
    if (this.imgFile != null){
      this.removeImage(this.imageUrl);
    }
    this.viewCtrl.dismiss();
  }

  uploadImage(event){
    if(event.target.files[0] != null){
      if(!event.target.files[0].type.includes('image')){
        alert('File should be image only.')
        return;
      }
      if(this.imgFile != null){
        if(this.imgFile.name == event.target.files[0].name){
          return;
        }
        else {
          this.removeImage(this.imageUrl);
        }
      }
      this.imgFile = <File>event.target.files[0];
      this.allowed = false;
      this.tmpUrl = this.imgFile.name;
      const task = this.eventProvider.uploadImg(this.imgFile);

      task.on('state_changed', (progress) => {
        this.uploadPercent = Math.round((progress.bytesTransferred / progress.totalBytes) * 100);
      }, (err) => {

      }, () => { //complete upload, wait for url.
        task.snapshot.ref.getDownloadURL().then(url => {
          this.imageUrl = url;
          this.allowed = true;
        })
      })
    }
  }

  removeImage(url){
    this.eventProvider.deleteImg(url);
    this.imgFile = null;
    this.imageUrl = "";
    this.tmpUrl = "";
    this.uploadPercent = null;
    this.fbImg = false;
  }
}
