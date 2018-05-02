import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { Component } from '@angular/core';
import { NavController, Events, Platform } from 'ionic-angular';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  tabName = 'יומן אירועים';
  refresh_id = 'calendarRef';
  dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hourCycle: 'h24'};

  constructor(public navCtrl: NavController, public events: Events, public calendarProvider: CalendarEventProvider, public platform: Platform) {
  }

  ionViewDidLoad(){

  }

  ionViewDidEnter(){
    this.events.publish('tab', this.tabName, this.refresh_id);
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
}
