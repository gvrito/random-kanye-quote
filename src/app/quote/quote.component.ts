import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { CustomStylesComponent } from '../shared/components/custom-styles/custom-styles.component';
import { IStyles } from '../shared/interfaces/styles';
import { RandomService } from '../shared/services/random.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  imgUrl = 'https://source.unsplash.com/1920x1080';
  quote = '';
  private lastClickedKanye = new Date().getMilliseconds();
  private lastClickedImage = new Date().getMilliseconds();
  private DEBOUNCE_TIMEOUT = 1000;
  customText = true;
  customStyles: IStyles = {
    color: '#cbcbcb',
    fontSize: '24px',
    bottom: '5%',
    left: '50%',
    lineHeight: '32px'
  }

  constructor(
    private randomService: RandomService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.generateQuote();
  }

  generateQuote(buttonClicked = false) {
    const newDate = new Date().getTime();
    if (buttonClicked && newDate - this.lastClickedKanye < this.DEBOUNCE_TIMEOUT) {
      return;
    }
    this.lastClickedKanye = newDate;
    this.randomService.getRandomQuote()
    .pipe(
      tap(res => {
        this.quote = res.quote;
      })
    ).subscribe();
  }

  generateImage(buttonClicked = false) {
    const newDate = new Date().getTime();
    if (buttonClicked && newDate - this.lastClickedImage < this.DEBOUNCE_TIMEOUT) {
      return;
    }
    this.lastClickedImage = newDate;
    this.randomService.getRandomImage()
    .subscribe(
      (success) => this.imgUrl = success.url,
      (error) => this.imgUrl = error.url
      );
  }

  changeText() {
    const data = {
      styles: this.convertStyles(this.customStyles, false),
      setStyles: (styles: IStyles) => {
        this.customStyles = this.convertStyles(styles);
      }
    }
    const ref = this.dialog.open(CustomStylesComponent, {
      data
    });
  }

  convertStyles(styles: IStyles, fromDialog = true): IStyles {
    if (fromDialog) {
      return {
        bottom: styles.bottom + '%',
        left: styles.left + '%',
        fontSize: styles.fontSize + 'px',
        lineHeight: (Number(styles.fontSize) + 8) + 'px',
        color: styles.color
      }
    } else {
      return {
        bottom: styles.bottom.substring(0, styles.bottom.length - 1),
        left: styles.left.substring(0, styles.left.length - 1),
        fontSize: styles.fontSize.substring(0, styles.fontSize.length - 2),
        lineHeight: styles.fontSize.substring(0, styles.lineHeight.length - 2),
        color: styles.color
      }
    }
  }

}
