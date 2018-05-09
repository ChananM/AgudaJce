import { CalendarEvent } from './../../models/calendarEvent.model';
import { HomeStory } from './../../models/homeStory.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DatabaseProvider {

  private homeStoriesCollection: AngularFirestoreCollection<HomeStory>;
  private calEventsCollection: AngularFirestoreCollection<CalendarEvent>;

  private homeStories: Observable<HomeStory[]>;
  private calEvents: Observable<CalendarEvent[]>;

  constructor(public afs: AngularFirestore) {

    const settings = { timestampsInSnapshots: true };
    afs.app.firestore().settings(settings);

    this.homeStoriesCollection = afs.collection<HomeStory>('HomeStories', ref => ref.orderBy('createdOn', 'desc'));
    this.calEventsCollection = afs.collection<CalendarEvent>('Events', ref => ref.orderBy('createdOn', 'asc'));

    this.homeStories = this.homeStoriesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        let temp = a.payload.doc.data() as HomeStory;
        temp.id = a.payload.doc.id;
        const data = HomeStory.toHomeStory(temp);
        return data;
      })
    });

    this.calEvents = this.calEventsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        let temp = a.payload.doc.data() as CalendarEvent;
        temp.id = a.payload.doc.id;
        const data = CalendarEvent.toCalEvent(temp);
        return data;
      })
    });

  }

  getHomeStories(){
    return this.homeStories;
  }

  getCalEvents(){
    return this.calEvents;
  }

  addHomeStory(story: HomeStory){
    story.createdOn = this.getCurrentTimestamp();
    return this.homeStoriesCollection.add(HomeStory.toObject(story));
  }

  addCalEvent(event: CalendarEvent){
    event.createdOn = this.getDateTimestamp(event.getDate()); //created on = the event date timestamp
    return this.calEventsCollection.add(CalendarEvent.toObject(event));
  }

  updateHomeStory(story: HomeStory){
    return this.homeStoriesCollection.doc(story.id).update(HomeStory.toObject(story));
  }

  updateCalEvent(event: CalendarEvent){
    event.createdOn = this.getDateTimestamp(event.getDate()); //created on = the event date timestamp
    return this.calEventsCollection.doc(event.id).update(CalendarEvent.toObject(event));
  }

  deleteHomeStory(story: HomeStory){
    return this.homeStoriesCollection.doc(story.id).delete();
  }

  deleteCalEvent(event: CalendarEvent){
    return this.calEventsCollection.doc(event.id).delete();
  }

  getCurrentTimestamp(): string{ //format: yyyyMMddHHmmSS
    let date = new Date();
    return "" + date.getFullYear() + (date.getMonth()+1 < 10 ? "0" : "") + (date.getMonth()+1)
            + (date.getDate() < 10 ? "0" : "") + date.getDate()
            + (date.getHours() == 0 ? "0" : "") + (date.getHours() < 10 ? "0" : "") + date.getHours()
            + (date.getMinutes() == 0 ? "0" : "") + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
            + (date.getSeconds() == 0 ? "0" : "") + (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();
  }

  getDateTimestamp(date: Date){
    return "" + date.getFullYear() + (date.getMonth()+1 < 10 ? "0" : "") + (date.getMonth()+1)
            + (date.getDate() < 10 ? "0" : "") + date.getDate()
            + (date.getHours() == 0 ? "0" : "") + (date.getHours() < 10 ? "0" : "") + date.getHours()
            + (date.getMinutes() == 0 ? "0" : "") + (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
  }
}
