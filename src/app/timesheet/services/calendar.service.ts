import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { DayOfWeek } from '../../core/models/date-and-time/DayOfWeek.enum';
import { Month } from '../../core/models/date-and-time/Month.enum';
import { CalendarDate } from '../../core/models/date-and-time/CalendarDate.model';
import { AppUtils } from '../../core/util/AppUtils.util';


@Injectable()
export class CalendarService {
    // TODO this will need to get expanded to use any period of time, not just a month
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

            result.push(new CalendarDate(
                momentDate.date(),
                momentDate.day(),
                momentDate.month(),
                momentDate.year(),
                isWeekend
            ));

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
