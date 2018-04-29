import { CalendarEvent } from './../../models/calendarEvent.model';
import { HomeStory } from './../../models/homeStory.model';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class DatabaseProvider {

  homeStoriesCollection: AngularFirestoreCollection<HomeStory>;
  calEventsCollection: AngularFirestoreCollection<CalendarEvent>;

  homeStories: Observable<HomeStory[]>;
  calEvents: Observable<CalendarEvent[]>;

  constructor(public afs: AngularFirestore) {

    this.homeStoriesCollection = afs.collection<HomeStory>('HomeStories');
    this.calEventsCollection = afs.collection<CalendarEvent>('Events');

    this.homeStories = this.homeStoriesCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as HomeStory;
        data.id = a.payload.doc.id;
        return data;
      })
    });

    this.calEvents = afs.collection('Events').snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as CalendarEvent;
        data.id = a.payload.doc.id;
        return data;
      })
    });

  }

 //*******************************************************/
 /* #### USE IT LIKE THIS: ####
  dbProvider.getHomeStories().subscribe(stories => { 
    stories.forEach(element => { //stories is HomeStory[] in json mode,
                                  //you should use toHomeStory static function on the elements
                                  //or use them as anonymous objects

      console.log(element.id);  //you will get the id automaticlly from firebase.   
    });
  }); */
  getHomeStories(){
    return this.homeStories;
  }
//*******************************************************/

//*******************************************************/
  //you can also do: let x = dbProvider.getHomeStories();
  //                x.subscribe...... etc
//*******************************************************/

//*******************************************************/
  /* #### USE IT LIKE THIS: ####
   dbProvider.getCalEvents().subscribe(events => { ;
     .....  //events is CalendarEvent[] in json mode,
                //you should use toCalEvent static function on the elements
                ////or use them as anonymous objects

            ////you will get the id automaticlly from firebase.       
  }); */
  getCalEvents(){
    return this.calEvents;
  }
//*******************************************************/

  addHomeStory(story: HomeStory){
    this.homeStoriesCollection.add(HomeStory.toObject(story));
    
  }

  addCalEvent(event: CalendarEvent){
    this.homeStoriesCollection.add(CalendarEvent.toObject(event));
  }
}
