import { NgModule } from '@angular/core';
import { MaterialModule } from './material-components/material.module';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [
        MaterialModule
    ]
})
export class CoreModule {

}