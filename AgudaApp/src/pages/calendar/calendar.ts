import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hourCycle: 'h24'};

  constructor(public navCtrl: NavController,
              public calendarProvider: CalendarEventProvider,
              public platform: Platform,
              private iab: InAppBrowser
            ) {
  }

  ionViewDidLoad(){

  }

  ionViewDidEnter(){
    this.doRefresh();
  }

  doRefresh(){
    console.log("calendar refresh");
  }

  toggleSection(i) {
    this.calendarProvider.posts[i].open = !this.calendarProvider.posts[i].open;
  }

  addToPlatformCalendar(i){
    console.log("this event will be added to the platform calendar");
    console.log(this.calendarProvider.posts[i]);
  }

  gotoPurachase(url: string){
    console.log("redirect to: " + url);
    /*const browser = */ this.iab.create(url);
  }
}
