import { NgModule } from '@angular/core';
import { MaterialModule } from './material-components/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
    ]
})
export class CoreModule {

}
