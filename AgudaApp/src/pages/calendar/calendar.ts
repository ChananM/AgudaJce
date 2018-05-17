import { CalendarEvent } from './../../models/calendarEvent.model';
import { CalendarEventProvider } from './../../providers/calendar-event/calendar-event';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Calendar } from '@ionic-native/calendar';

@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hourCycle: 'h24'};

  constructor(public navCtrl: NavController,
              public calendarProvider: CalendarEventProvider,
              public platform: Platform,
              private iab: InAppBrowser,
              private calendar: Calendar
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

  async addToPlatformCalendar(event: CalendarEvent){
    if (this.platform.is('core') || this.platform.is('mobileweb')){
      alert("Adding an event to a calendar aviable from application only");
      return;
    } 
    console.log(event.date + "this event will be added to the platform calendar");
    if (this.platform.is('android')){
      let permission = await this.calendar.hasReadWritePermission();
      
      if(!permission){
        await this.calendar.requestReadWritePermission();
      }
    }
    this.calendar.createEventInteractively(event.headline,"",event.content,event.getDate(),event.getDate());
    
    
  }

  gotoPurachase(url: string){
    console.log("redirect to: " + url);
    /*const browser = */ this.iab.create(url);
  }

  closeItem(post: CalendarEvent){
    post.open = false;
  }
}
