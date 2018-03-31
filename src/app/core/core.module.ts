import { NgModule } from '@angular/core';
import { MaterialModule } from './material-components/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LaborCalendarComponent } from './components/labor-calendar/labor-calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        LaborCalendarComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
    ],
    exports: [
        MaterialModule,
        FlexLayoutModule,
        LaborCalendarComponent
    ]
})
export class CoreModule {

}
