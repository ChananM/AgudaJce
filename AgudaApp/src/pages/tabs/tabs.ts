import { Component } from '@angular/core';

import { InfoPage } from '../info/info';
import { HomePage } from '../home/home';
import { GalleryPage } from '../gallery/gallery';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CalendarPage;
  tab3Root = GalleryPage;
  tab4Root = InfoPage;

  constructor() {

  }
}
