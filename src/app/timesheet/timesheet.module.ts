import { NgModule } from '@angular/core';
import { TimesheetComponent } from './timesheet.component';
import { MaterialModule } from '../core/material-components/material.module';
import { CommonModule } from '@angular/common';
import { CalendarService } from './services/calendar.service';
import { TimeSlotService } from './services/time-slot.service';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatRippleModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TimeSlotEditorComponent } from './timesheet-mobile/time-slot-editor/time-slot-editor.component';

@NgModule({
    declarations: [
        TimesheetComponent,
        TimeSlotEditorComponent
    ],
    imports: [
        MaterialModule,
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatRippleModule
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
