import {  MatGridListModule,
          MatIconModule,
          MatButtonModule,
          MatCardModule} from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ]
})
export class MaterialModule {
}
