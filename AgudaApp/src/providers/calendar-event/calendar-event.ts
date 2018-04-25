import { CalendarEvent } from './../../models/calendarEvent.model';
import { Injectable } from '@angular/core';
  
//Date format is ISO 8601 "YYYY-MM-DD" the value is a string

@Injectable()
export class CalendarEventProvider {

  posts: any = [];

  constructor() {
  }
  load(){
    this.posts = [
      new CalendarEvent("",this.isoToDate("2018-04-24"),"Test","Let's test our calendar event"),
      new CalendarEvent("https://s-i.huffpost.com/gen/1842880/images/n-NIGHTCLUB-628x314.jpg",this.isoToDate("2018-03-10"),"Test2","Let's test our calendar event"),
      new CalendarEvent("https://c.wallhere.com/photos/90/73/disco_club_dance_hands-723564.jpg!d",this.isoToDate("2018-04-24"),"Test3","Let's test our calendar event")
    ];
  }

  private isoToDate(dateStr:string) : Date{
    return new Date(dateStr);
  }
}

