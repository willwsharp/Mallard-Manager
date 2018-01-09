import {  MatGridListModule } from '@angular/material';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatGridListModule,
        MatSlideToggleModule
    ],
    exports: [
        MatGridListModule,
        MatSlideToggleModule
    ]
})
export class MaterialModule {

}