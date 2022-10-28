import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { MatButtonModule } from '@angular/material/button';
import { RandomService } from '../shared/services/random.service';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QuoteComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [
    RandomService
  ]
})
export class QuoteModule { }
