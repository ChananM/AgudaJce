import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeTab = HomePage;
  calendarTab = CalendarPage;
  galleryTab = GalleryPage;
  infoTab = InfoPage;

  constructor() {

  }
}
