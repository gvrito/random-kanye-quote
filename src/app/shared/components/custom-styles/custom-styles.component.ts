import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IStyles } from '../../interfaces/styles';

@Component({
  selector: 'app-custom-styles',
  templateUrl: './custom-styles.component.html',
  styleUrls: ['./custom-styles.component.scss']
})
export class CustomStylesComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    color: new FormControl<string>('', Validators.required),
    fontSize: new FormControl<string>('', Validators.required),
    bottom: new FormControl<string>('', Validators.required),
    left: new FormControl<string>('', Validators.required),
  })
  subscriptions = new Subscription();
  constructor(
    @Inject(MAT_DIALOG_DATA) private options: {setStyles: Function, styles: IStyles},
    private ref: MatDialogRef<CustomStylesComponent>
  ) { }

  ngOnInit(): void {
    this.formGroup.patchValue(this.options.styles);
    this.subscriptions.add(
      this.formGroup.valueChanges.subscribe(
        () => {
          this.setStyles();
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setStyles(cancel = false): void {
    this.options.setStyles(this.formGroup.value);
    if (cancel) {
      this.close();
    }
  }

  close(): void {
    this.ref.close();
  }

}
