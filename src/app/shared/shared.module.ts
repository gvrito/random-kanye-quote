import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomStylesComponent } from './components/custom-styles/custom-styles.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    exports: [
        CustomStylesComponent,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [
        CustomStylesComponent
    ],
    providers: [],
})
export class SharedModule { }
