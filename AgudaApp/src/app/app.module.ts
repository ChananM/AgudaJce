import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavService } from './service/nav/nav.service';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CalendarComponent } from './calendar/calendar.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.router';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent,
    HomeComponent,
    GalleryComponent,
    CalendarComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
