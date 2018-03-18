import { Component, Input } from '@angular/core';
import { CalendarDate } from '../core/models/date-and-time/CalendarDate.model';
import { Month } from '../core/models/date-and-time/Month.enum';
import { MatSlideToggleChange } from '@angular/material';
import * as _ from 'lodash';
import { DayOfWeek } from '../core/models/date-and-time/DayOfWeek.enum';
import { CalendarService } from './services/calendar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimesheetService } from '../core/services/timesheet.service';
import { Timesheet } from '../core/models/timesheet/Timesheet.model';

@Component({
    selector: 'mm-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: [
        './timesheet.component.css'
    ]
})
export class TimesheetComponent {

}
