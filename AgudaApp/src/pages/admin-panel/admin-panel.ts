import { StoryArticlePage } from './../home/story-article/story-article';
import { HomeStory } from './../../models/homeStory.model';
import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { HomeStoryProvider } from '../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController, NavParams, Loading } from 'ionic-angular';
import { CalendarEvent } from '../../models/calendarEvent.model';

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
              private toastCtrl: ToastController) {     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');

    let interval = setInterval(() => {
      if(this.storyProv.posts.length > 0){
        let loader = <Loading>this.navParams.get('blocker');
        loader.dismiss();
        clearInterval(interval);
      }
    }, 1000);

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
        toastOpt.message = 'Story deleted successfully';
      })
      .catch(() => {
        toastOpt.message = 'Failed to delete story';
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
        toastOpt.message = 'Event deleted successfully';
      })
      .catch(() => {
        toastOpt.message = 'Failed to delete event';
      });
    loader.dismiss();
    this.toastCtrl.create(toastOpt).present();
  }

  presentModal(page, params) {
    let modal = this.modalCtrl.create(page, params);
    modal.present();
  }
}
