import { DatabaseProvider } from './../database/database';
import { CalendarEvent } from './../../models/calendarEvent.model';
import { Injectable } from '@angular/core';
  
//Date format is ISO 8601 "YYYY/MM/DD HH:MM:SS" the value is a string

@Injectable()
export class CalendarEventProvider {

  posts: CalendarEvent[] = [];

  constructor(public dbProvider: DatabaseProvider) {
    dbProvider.getCalEvents().subscribe(stories => { 
      this.posts = stories;
      console.log(this.posts);
    })
  }

  addEvent(event: CalendarEvent){
    return this.dbProvider.addCalEvent(event);
  }

  editEvent(event: CalendarEvent){
    return this.dbProvider.updateCalEvent(event);
  }

  deleteEvent(event: CalendarEvent){
    return this.dbProvider.deleteCalEvent(event);
  }

  uploadImg(img: File){
    return this.dbProvider.uploadImage('calendar', img);
  }

  deleteImg(url: string){
    return this.dbProvider.deleteImage(url);
  }
}

