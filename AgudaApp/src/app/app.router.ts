import { Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { CalendarComponent } from "./calendar/calendar.component";

export const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "info", component: InfoComponent},
    { path: "gallery", component: GalleryComponent},
    { path: "calendar", component: CalendarComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];