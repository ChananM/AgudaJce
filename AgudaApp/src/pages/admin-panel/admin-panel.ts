import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { HomeStoryProvider } from '../../providers/home-story/home-story';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  modelController: any;

  constructor(public navCtrl: NavController, public storyProv: HomeStoryProvider, public calProv: CalendarEventProvider) {     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');
    this.storyProv.load();
    this.calProv.load();
    this.modelController = "home";
  }
}
