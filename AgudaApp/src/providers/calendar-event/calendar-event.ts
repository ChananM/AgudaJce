import { CalendarEventModel } from './../../models/calendarEvent.model';
import { Injectable } from '@angular/core';

/*
  Generated class for the CalendarEventProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  
  Date format is ISO 8601 "YYYY-MM-DD" the value is a string
*/
@Injectable()
export class CalendarEventProvider {

  posts: any = [];

  constructor() {
  }
  load(){
    this.posts = [
      new CalendarEventModel("2018-04-24","Test","Let's test our calendar event")
    ];
  }
}
