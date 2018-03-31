import { Component, Input, OnInit } from '@angular/core';
import { Month } from '../../models/date-and-time/Month.enum';
import { CalendarDate } from '../../models/date-and-time/CalendarDate.model';
import { DayOfWeek } from '../../models/date-and-time/DayOfWeek.enum';
import * as _ from 'lodash';
import { CalendarService } from '../../../timesheet/services/calendar.service';
import { MatSlideToggleChange } from '@angular/material';
import * as moment from 'moment';

@Component({
    selector: 'mm-labor-calendar',
    templateUrl: './labor-calendar.component.html',
    styleUrls: [ './labor-calendar.component.css']
})
export class LaborCalendarComponent implements OnInit {

    @Input()
    public get givenMonth(): Month {
        return this._givenMonth;
    }
    public set givenMonth(newMonth: Month) {
        this._givenMonth = newMonth;
        this.dates = this.calendarService.getCalendar(this._givenMonth, this.givenYear);
    }
    @Input()
    public get givenYear() {
        return this._givenYear;
    }
    public set givenYear(newYear: number) {
        this._givenYear = newYear;
        this.dates = this.calendarService.getCalendar(this._givenMonth, this.givenYear);
    }
    public displayWeekends = false;
    public dates: CalendarDate[] = [];
    // we need to be able to iterate over the keys in the DayOfWeek enum
    public dayOfWeek: typeof DayOfWeek = DayOfWeek;
    public daysOfWeek: string[] = _.filter(_.keys(DayOfWeek), (key: any) => !isNaN(Number(DayOfWeek[key])));
    public months: typeof Month = Month;
    public dateSelected: CalendarDate = null;

    private _givenMonth: Month = moment().month();
    private _givenYear: number = moment().year();

    constructor(private calendarService: CalendarService) { }

    public ngOnInit() {
        // TODO: get labor calendar for user and month
        this.dates = this.calendarService.getCalendar(this._givenMonth);
    }

    public notInCurrentMonth(date: CalendarDate): boolean {
        return date.month !== this._givenMonth;
    }

    public viewTimesheetDateView(date: CalendarDate) {
        if (!this.notInCurrentMonth(date)) {
            this.dateSelected = date;
        }
    }

    public isCurrentDate(date: CalendarDate): boolean {
        return (date.date === moment().date()) &&
            (date.month === moment().month()) &&
            (date.year === moment().year());
    }
}
