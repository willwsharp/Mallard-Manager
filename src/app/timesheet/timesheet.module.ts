import { NgModule } from '@angular/core';
import { TimesheetComponent } from './timesheet.component';
import { MaterialModule } from '../core/material-components/material.module';
import { CommonModule } from '@angular/common';
import { CalendarService } from './services/calendar.service';
import { DateViewComponent } from './timesheet-mobile/date-view/date-view.component';
import { TimeSlotEditorComponent } from './timesheet-mobile/date-view/time-slot-editor/time-slot-editor.component';
import { TimeSlotService } from './services/time-slot.service';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        TimesheetComponent,
        DateViewComponent,
        TimeSlotEditorComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule
    ],
    exports: [
        TimesheetComponent
    ],
    providers: [
        TimeSlotService,
        CalendarService
    ]
})
export class TimesheetModule {

}
