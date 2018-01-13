import { Component, Input } from '@angular/core';
import { TimesheetService } from './timesheet.service';
import { TimesheetDate } from './models/TimesheetDate.model';
import { CalendarDate } from '../core/models/CalendarDate.model';
import { Month } from '../core/models/Month.enum';
import { MatSlideToggleChange } from '@angular/material';
import * as _ from 'lodash';
import { DayOfWeek } from '../core/models/DayOfWeek.enum';

@Component({
    selector: 'mm-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: [
        './timesheet.component.css'
    ]
})
export class TimesheetComponent {

    @Input() givenMonth: Month;
    @Input() givenYear: number;

    public displayWeekends = false;
    public dates: CalendarDate[] = [];
    public givenColumns: 5 | 7 = 5;
    // we need to be able to iterate over the keys in the DayOfWeek enum
    public dayOfWeek: typeof DayOfWeek = DayOfWeek;
    public daysOfWeek: string[] = _.filter(_.keys(DayOfWeek), (key: any) => !isNaN(Number(DayOfWeek[key])));

    private datesWithoutWeekends: CalendarDate[] = [];

    constructor(private timesheetService: TimesheetService) {
        this.dates = this.timesheetService.getCalendar(this.givenMonth, this.givenYear);
        this.datesWithoutWeekends = _.filter(this.dates, {isWeekend: false});
    }

    public onDisplayWeekendChange(event: MatSlideToggleChange) {
        this.displayWeekends = event.checked;
        this.givenColumns = this.displayWeekends ? 7 : 5;
    }

    public displayWeekendTiles(day: string): boolean {
        let toReturn = false;
        toReturn = toReturn || this.displayWeekends;
        toReturn = toReturn || (day !== DayOfWeek[DayOfWeek.Sun]) &&
            (day !== DayOfWeek[DayOfWeek.Sat]);
        return toReturn;
    }
}
