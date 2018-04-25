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
      new CalendarEventModel("",this.isoTodate("2018-04-24"),"Test1","Let's test our calendar event"),
      new CalendarEventModel("https://s-i.huffpost.com/gen/1842880/images/n-NIGHTCLUB-628x314.jpg",this.isoTodate("2018-03-20"),"Test1","Let's test our calendar event")
    ];
  }

  private isoTodate(dateStr:string){
    return new Date(dateStr);
  }
}

