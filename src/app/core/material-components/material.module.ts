import {  MatGridListModule,
          MatIconModule,
          MatButtonModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatGridListModule,
        MatSlideToggleModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class MaterialModule {
}
