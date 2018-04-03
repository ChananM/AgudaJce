import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { Events } from 'ionic-angular';
import { CalendarPage } from '../../pages/calendar/calendar';
import { GalleryPage } from '../../pages/gallery/gallery';
import { InfoPage } from '../../pages/info/info';

@Component({
  providers: [HomePage, CalendarPage, GalleryPage, InfoPage],
  selector: 'refresh',
  templateUrl: 'refresh.html'
})
export class RefreshComponent {

  tab: string;
  
  constructor(private events: Events, private h: HomePage, private c: CalendarPage, private g: GalleryPage, private i: InfoPage) {
    this.events.subscribe('tab', (tab) => {
      this.tab = tab;
    });   
  }

  doRefresh(){
    if(this.tab == this.h.tabName)
      this.h.doRefresh();

    else if (this.tab == this.c.tabName)
      this.c.doRefresh();

    else if (this.tab == this.g.tabName)
      this.g.doRefresh();
      
    else if (this.tab == this.i.tabName)
      this.i.doRefresh();

    console.log('clicked');
  }
}
