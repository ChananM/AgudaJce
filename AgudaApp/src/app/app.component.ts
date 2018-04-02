import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgudaJCE';
  class = 'fix';

  @HostListener("window:scroll", []) onScroll(): void {
    if (document.body.scrollHeight > document.body.clientHeight) {
      this.class = 'stick';
    }
    else{
      this.class = 'fix';
    }
  }
}
