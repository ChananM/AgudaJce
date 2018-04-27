import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { HomeDataProvider } from './../../providers/home-data/home-data';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-admin-panel',
  templateUrl: 'admin-panel.html',
})
export class AdminPanelPage {

  modelController: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public homeData: HomeDataProvider, public calendarData: CalendarEventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPanelPage');
    this.homeData.load();
    this.calendarData.load();
    this.modelController = "home";
  }
}
