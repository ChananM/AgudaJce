import { DatabaseProvider } from './../database/database';
import { CalendarEvent } from './../../models/calendarEvent.model';
import { Injectable } from '@angular/core';
  
//Date format is ISO 8601 "YYYY-MM-DD" the value is a string

@Injectable()
export class CalendarEventProvider {

  posts: CalendarEvent[] = [];

  constructor(public dbProvider: DatabaseProvider) {
    dbProvider.getCalEvents().subscribe(stories => { 
      this.posts = stories;
      console.log(this.posts);
    })
  }
  async load(){
    await this.posts.length > 0;
  }

  addEvent(event: CalendarEvent){
    return this.dbProvider.addCalEvent(event);
  }

  deleteEvent(event: CalendarEvent){
    return this.dbProvider.deleteCalEvent(event);
  }
}

