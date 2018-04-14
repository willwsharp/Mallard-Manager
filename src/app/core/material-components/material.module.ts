import {  MatGridListModule,
          MatIconModule,
          MatButtonModule,
          MatCardModule,
          MatDividerModule,
          MatExpansionModule,
          MatListModule,
          MatSelectModule,
          MatFormFieldModule,
          MatInputModule,
          MatSidenavModule} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatExpansionModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSidenavModule
    ]
})
export class MaterialModule { }
