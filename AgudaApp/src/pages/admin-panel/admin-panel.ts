import { HomeStory } from './../../models/homeStory.model';
import { NewEventPage } from './new-event/new-event';
import { NewHomeStoryPage } from './new-home-story/new-home-story';
import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { HomeStoryProvider } from '../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController, ModalController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  modelController: any;
  newHomePage = NewHomeStoryPage;
  newCalendarPage = NewEventPage;

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController, 
              public storyProv: HomeStoryProvider, 
              public calProv: CalendarEventProvider,
              private toastCtrl: ToastController) {     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');
    this.storyProv.load();
    this.calProv.load();
    this.modelController = "home";
  }

  deleteStory(story: HomeStory){
    let toastOpt = {
      message: '',
      duration: 3000,
      cssClass: 'toastClass',
      position: 'bottom'
    };
    this.storyProv.deleteStory(story)
      .then(() => {
        toastOpt.message = 'Story deleted successfully';
      })
      .catch(() => {
        toastOpt.message = 'Failed to delete story';
      });
    this.toastCtrl.create(toastOpt).present();
  }

  presentModal(page) {
    let modal = this.modalCtrl.create(page);
    modal.present();
  }
}
