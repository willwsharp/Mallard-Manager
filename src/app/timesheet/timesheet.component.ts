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

    /**
     * TODO: give ability for users to set-up weekly timesheets
     * instead of only monthly timesheets
     */
    public timesheetMonth: Month;
    public timesheetYear: number;
    public displayWeekends = false;
    public dates: CalendarDate[] = [];
    public givenColumns: 5 | 7 = 5;
    // we need to be able to iterate over the keys in the DayOfWeek enum
    public dayOfWeek: typeof DayOfWeek = DayOfWeek;
    public daysOfWeek: string[] = _.filter(_.keys(DayOfWeek), (key: any) => !isNaN(Number(DayOfWeek[key])));
    public months: typeof Month = Month;
    public timesheet: Timesheet;

    public dateSelected: CalendarDate = null;

    private datesWithoutWeekends: CalendarDate[] = [];

    constructor(private calendarService: CalendarService,
                private _route: ActivatedRoute,
                private _router: Router,
                private _timesheetService: TimesheetService) {
        this.timesheet = this._timesheetService.getTimesheet(this._route.snapshot.paramMap.get('id'));
        this.timesheetMonth = this.timesheet.dateRange['0'].month;
        this.timesheetYear = this.timesheet.dateRange['0'].year;

        this.dates = this.calendarService.getCalendar(this.timesheetMonth, this.timesheetYear);
        this.datesWithoutWeekends = _.filter(this.dates, {isWeekend: false});
    }

    public onDisplayWeekendsToggled(event: MatSlideToggleChange) {
        this.displayWeekends = event.checked;
        this.givenColumns = this.displayWeekends ? 7 : 5;
    }

    public displayingWeekendTiles(day: string): boolean {
        let toReturn = false;
        toReturn = toReturn || this.displayWeekends;
        toReturn = toReturn || (day !== DayOfWeek[DayOfWeek.Sun]) &&
            (day !== DayOfWeek[DayOfWeek.Sat]);
        return toReturn;
    }

    public notInCurrentMonth(date: CalendarDate): boolean {
        return date.month !== this.timesheetMonth;
    }

    public viewTimesheetDateView(date: CalendarDate) {
        if (!this.notInCurrentMonth(date)) {
            this.dateSelected = date;
        }
    }

    public returnToCalendarView() {
        this.dateSelected = null;
    }
}
