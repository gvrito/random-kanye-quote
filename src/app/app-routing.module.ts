import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { ROUTES } from './core/constants'

const routes: Routes = [
  // { path: '', redirectTo: ROUTES.KANYE, pathMatch: 'full' },
  // { path: ROUTES.KANYE, component: QuoteComponent }
  { path: '', component: QuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
