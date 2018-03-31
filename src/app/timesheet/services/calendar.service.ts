import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { DayOfWeek } from '../../core/models/date-and-time/DayOfWeek.enum';
import { Month } from '../../core/models/date-and-time/Month.enum';
import { CalendarDate } from '../../core/models/date-and-time/CalendarDate.model';
import { AppUtils } from '../../core/util/AppUtils.util';

/**
 * This service provides utility functions for Calendars.
 * @author willwsharp
 */
@Injectable()
export class CalendarService {
    /**
     * Get the dates for the given month and year
     * @param requestedMonth default is current month
     * @param requestedYear default is current year
     */
    public getCalendar(requestedMonth: Month = moment().month(), requestedYear: number = moment().year()): CalendarDate[] {
        const result: CalendarDate[] = [];
        const dayCount: number = moment().month(requestedMonth).daysInMonth();
        const daysBeforeFirstDay: number = moment().year(requestedYear).month(requestedMonth).date(1).day();
        const startDay: number = 1 - daysBeforeFirstDay;
        let continueBuildingCalendar = true;
        let currentDay: number = startDay;
        let daysLeftToAdd: number;

        /* Continuously build the calendar until we completed the given month, make sure we round the calendar out to
           the nearest saturday so we make it easier to view */
        while (continueBuildingCalendar) {
            const momentDate: moment.Moment = moment().year(requestedYear).month(requestedMonth).date(currentDay);
            const isWeekend: boolean = momentDate.day() === DayOfWeek.Sat || momentDate.day() === DayOfWeek.Sun;

            result.push(new CalendarDate(
                momentDate.date(),
                momentDate.month(),
                momentDate.year(),
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

    private isLastDayInMonth(requestedMonth: Month, requestedYear: number, day: moment.Moment, dayCount: number): boolean {
        let result = true;
        result = result && day.date() === dayCount;
        result = result && day.month() === requestedMonth;
        result = result && day.year() === requestedYear;
        return result;
    }
}
