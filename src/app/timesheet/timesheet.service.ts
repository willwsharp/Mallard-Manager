import { Injectable } from "@angular/core";
import { TimesheetDate } from "./models/TimesheetDate.model";
import * as moment from 'moment';
import { CalendarDate } from "../core/models/CalendarDate.model";
import { DayOfWeek } from "../core/models/DayOfWeek.enum";
import { Month } from "../core/models/Month.enum";

@Injectable()
export class TimesheetService {

    public getTimesheetDates(requestedMonth: Month = 0, requestedYear: number = moment().year()): CalendarDate[] {
        let result: CalendarDate[] = [];
        let dayCount: number = moment().month(requestedMonth).daysInMonth();

        for (let day = 1; day <= dayCount; day++) {
            let momentDate: moment.Moment = moment().year(requestedYear).month(requestedMonth).date(day);
            let isWeekend: boolean = momentDate.day() === DayOfWeek.Sat || momentDate.day() === DayOfWeek.Sun;
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

    public saveTimesheet(): boolean {
        return false;
    }
}