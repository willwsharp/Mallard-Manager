import { MatButtonModule, MatGridListModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatGridListModule
    ]
})
export class MaterialModule {

}