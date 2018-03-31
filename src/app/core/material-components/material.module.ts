import {  MatGridListModule,
          MatIconModule,
          MatButtonModule,
          MatCardModule,
          MatDividerModule} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule
    ]
})
export class MaterialModule { }
