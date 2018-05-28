import { StoryArticlePage } from './../home/story-article/story-article';
import { HomeStory } from './../../models/homeStory.model';
import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { HomeStoryProvider } from '../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController, NavParams, Loading, AlertController } from 'ionic-angular';
import { CalendarEvent } from '../../models/calendarEvent.model';
import { AuthProvider } from '../../providers/auth/auth';
import { AdminLoginPage } from '../admin-login/admin-login';
import { NotificationProvider } from '../../providers/notification/notification';

@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  modelController: string;
  storyPreview = StoryArticlePage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private loadingCtrl: LoadingController, 
              public storyProv: HomeStoryProvider, 
              public calProv: CalendarEventProvider,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private authProv: AuthProvider,
              private notifProv: NotificationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');

    let interval = setInterval(() => {
      if(this.storyProv.posts.length > 0){
        let loader = <Loading>this.navParams.get('blocker');
        loader.dismiss();
        clearInterval(interval);
      }
    }, 250);

    this.modelController = "home";
  }

  async deleteStory(story: HomeStory){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.storyProv.deleteStory(story)
      .then(() => {
        toastOpt.message = 'הסיפור נמחק בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
  }

  async deleteEvent(event: CalendarEvent){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    let loader = this.loadingCtrl.create();
    loader.present();
    await this.calProv.deleteEvent(event)
      .then(() => {
        toastOpt.message = 'האירוע נמחק בהצלחה';
      })
      .catch(() => {
        toastOpt.message = 'וואלה הסתבכתי קצת, נסה שוב';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
  }

  presentModal(page, params) {
    let modal = this.modalCtrl.create(page, params);
    modal.present();
  }

  logOut(){
    this.authProv.signOut();
    this.navCtrl.setRoot(AdminLoginPage);
  }

  sendNotification(){
    let alert = this.alertCtrl.create({
      title: 'שלח התראה',
      subTitle: 'שלח התראה לכל המכשירים',
      inputs: [
        {
          name: 'notification',
          type: 'text',
          placeholder: 'גוף ההתראה',
        }
      ],
      buttons: [
        {
          text: 'ביטול',
          role: 'cancel',
        },
        {
          text: 'שלח',
          handler: data => {
            console.log(data.notification);
            let toastOpt = {
              message: '',
              duration: 3000,
              cssClass: 'toastClass',
              position: 'bottom'
            };
            this.notifProv.sendGeneralNotification(data.notification)
              .then(() => {
                toastOpt.message = 'התראה נשלחה בהצלחה';
              })
              .catch(err => {
                toastOpt.message = err.message;
              });
            this.toastCtrl.create(toastOpt).present();
          }
        }
      ]
    });
    alert.present();
  }
}
