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

  addToPlatformCalendar(event: CalendarEvent){
    if (this.platform.is('core')){
      alert("Adding an event to a calendar aviable on mobile only");
      return;
    } 
    console.log(event.date + "this event will be added to the platform calendar");
    if (this.platform.is('android')){
      this.calendar.hasWritePermission().then(permission => {
        if (!permission){
          console.log("required write permission");
          this.calendar.requestReadWritePermission().then(res => {
          }, err => {
            console.log('err: perrmission request error', err);
            alert("perrmission request error");
          });
        }
      }).then(result => {
        this.calendar.createEventInteractively(event.headline,"",event.content,event.getDate(),event.getDate()).then(res => {
        });
      }).catch(failuCallback => {});
    }
    else if (this.platform.is('ios')){
      this.calendar.createEventInteractively(event.headline,"",event.content,event.getDate(),event.getDate()).then(res => {
      }, err => {
        console.log('err: adding event error', err);
        alert("adding event error: " + err);
      });
    }
    
  }

  gotoPurachase(url: string){
    console.log("redirect to: " + url);
    /*const browser = */ this.iab.create(url);
  }

  closeItem(post: CalendarEvent){
    post.open = false;
  }
}
