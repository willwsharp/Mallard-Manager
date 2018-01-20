import { NgModule } from '@angular/core';
import { TimesheetComponent } from './timesheet.component';
import { MaterialModule } from '../core/material-components/material.module';
import { CommonModule } from '@angular/common';
import { CalendarService } from './services/calendar.service';
import { DateViewComponent } from './timesheet-mobile/date-view/date-view.component';

@NgModule({
    declarations: [
        TimesheetComponent,
        DateViewComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        TimesheetComponent
    ],
    providers: [
        CalendarService
    ]
})
export class TimesheetModule {

}
