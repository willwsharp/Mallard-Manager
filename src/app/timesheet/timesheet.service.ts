import { Injectable } from '@angular/core';
import { TimesheetDate } from './models/TimesheetDate.model';
import * as moment from 'moment';
import { CalendarDate } from '../core/models/CalendarDate.model';
import { DayOfWeek } from '../core/models/DayOfWeek.enum';
import { Month } from '../core/models/Month.enum';
import { WeekDay } from '@angular/common/src/i18n/locale_data_api';
import { AppUtils } from '../core/util/AppUtils.util';

@Injectable()
export class TimesheetService {

    public getTimesheetDates(requestedMonth: Month = 1, requestedYear: number = moment().year()): CalendarDate[] {
        const result: CalendarDate[] = [];
        const dayCount: number = moment().month(requestedMonth).daysInMonth();

        for (let day = 1; day <= dayCount; day++) {
            const momentDate: moment.Moment = moment().year(requestedYear).month(requestedMonth).date(day);
            const isWeekend: boolean = momentDate.day() === DayOfWeek.Sat || momentDate.day() === DayOfWeek.Sun;
            result.push({
                date: momentDate.date(),
                dayOfWeek: momentDate.day(),
                month: momentDate.month(),
                year: momentDate.year(),
                isWeekend: isWeekend
            });
        }
        return result;
    }

    public getCalendar(requestedMonth: Month = 5, requestedYear: number = moment().year()): CalendarDate[] {
        const result: CalendarDate[] = [];
        const dayCount: number = moment().month(requestedMonth).daysInMonth();
        const daysBeforeFirstDay: number = moment().year(requestedYear).month(requestedMonth).date(1).day();
        const startDay: number = 1 - daysBeforeFirstDay;
        let continueBuildingCalendar = true;
        let currentDay: number = startDay;
        let daysLeftToAdd: number;

        while (continueBuildingCalendar) {
            const momentDate: moment.Moment = moment().year(requestedYear).month(requestedMonth).date(currentDay);
            const isWeekend: boolean = momentDate.day() === DayOfWeek.Sat || momentDate.day() === DayOfWeek.Sun;

            result.push({
                date: momentDate.date(),
                dayOfWeek: momentDate.day(),
                month: momentDate.month(),
                year: momentDate.year(),
                isWeekend: isWeekend
            });

            currentDay++;

            // if this is the last day in the month, figure out far away it is
            // from Saturday so we can round the calendar out.
            if (this.isLastDayInMonth(requestedMonth, requestedYear, momentDate, dayCount)) {
                // moment's week is 0 based, 6 is Saturday
                daysLeftToAdd = 6 - momentDate.day();
            }

            if (AppUtils.isDefined(daysLeftToAdd)) {
                continueBuildingCalendar = daysLeftToAdd > 0;
            }

            if (daysLeftToAdd > 0) {
                daysLeftToAdd--;
            }
        }
        return result;
    }

    public saveTimesheet(): boolean {
        return false;
    }

    private isLastDayInMonth(requestedMonth: Month, requestedYear: number, day: moment.Moment, dayCount: number): boolean {
        let result = true;
        result = result && day.date() === dayCount;
        result = result && day.month() === requestedMonth;
        result = result && day.year() === requestedYear;
        return result;
    }
}
