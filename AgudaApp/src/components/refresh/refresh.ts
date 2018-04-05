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
  ref_id: string;
  
  constructor(private events: Events, private h: HomePage, private c: CalendarPage, private g: GalleryPage, private i: InfoPage) {
    this.events.subscribe('tab', (tab, refresh) => {
      this.tab = tab;
      this.ref_id = refresh;
    });   
  }

  
  doRefresh(){

    document.getElementById(this.ref_id).getElementsByClassName('fa-sync').item(0).classList.add('fa-spin');

    if(this.tab == this.h.tabName)
      this.h.doRefresh();

    else if (this.tab == this.c.tabName)
      this.c.doRefresh();

    else if (this.tab == this.g.tabName)
      this.g.doRefresh();
      
    else if (this.tab == this.i.tabName)
      this.i.doRefresh();

    console.log('clicked');

    setTimeout(function(){
      document.getElementsByClassName('fa-spin').item(0).classList.remove('fa-spin');
    },1000);
  }
}
