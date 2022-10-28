import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'random-kanye-quote';
  isBigScreen = window.innerWidth > 1100;
  menuOpened = window.innerWidth > 1100;
  @ViewChild('drawer') drawer!: MatSidenav;
  ngOnInit() {
    fromEvent(window, 'resize')
    .pipe(
      debounceTime(250),
      tap((ev) => {
        this.isBigScreen = (ev.target as any).innerWidth > 1100;
        if (this.isBigScreen) {
          this.menuOpened = true;
          this.openMenu();
        }
      })
    )
    .subscribe()
  }
  openMenu() {
    this.menuOpened = true;
    this.drawer.open();
  }
  closeMenu() {
    if (!this.menuOpened && !this.isBigScreen) {
      this.menuOpened = false;
      this.drawer.close();
    }
  }
}
