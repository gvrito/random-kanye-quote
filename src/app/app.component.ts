import { Component, OnInit } from '@angular/core';
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
  ngOnInit() {
    fromEvent(window, 'resize')
    .pipe(
      debounceTime(250),
      tap((ev) => {
        this.isBigScreen = (ev.target as any).innerWidth > 1100;
        this.menuOpened = this.isBigScreen;
      })
    )
    .subscribe()
  }
  openMenu(drawer: any) {
    this.menuOpened = true;
    drawer.toggle()
  }
  closeMenu() {
    if (!this.menuOpened && !this.isBigScreen) {
      this.menuOpened = false;
    }
  }
}
