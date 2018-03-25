import { DayOfWeek } from './DayOfWeek.enum';
import { Month } from './Month.enum';
import * as moment from 'moment';
import { CalendarRange } from './CalendarRange.model';
import { Moment } from 'moment';

export class CalendarDate {

    public dayOfWeek: DayOfWeek;
    public isWeekend: boolean;

    constructor(public date: number, public month: Month, public year: number) {
        this.dayOfWeek = moment([this.year, this.month, this.date]).day();
        this.isWeekend = this.dayOfWeek === 5 || this.dayOfWeek === 6;
    }

    public getFormattedDayOfWeek(): string {
        return DayOfWeek[this.dayOfWeek];
    }

    public getFormattedMonth(): string {
        return Month[this.month];
    }

    // could be the source of errors; keep an eye on this override
    public toString(): string {
        return `${this.getFormattedDayOfWeek()}, ${this.getFormattedMonth()} ${this.date}, ${this.year}`;
    }

    public getShortenedDate(includeYear: boolean = false) {
        if (includeYear) {
            return moment([this.year, this.month, this.date]).format('MM/DD/YYYY');
        } else {
            return moment([this.year, this.month, this.date]).format('MM/DD');
        }
    }

    public inDateRange(range: CalendarRange): boolean {
        const fromDate: Moment = moment([range['0'].date, range['0'].month, range['0'].year]);
        const toDate: Moment = moment([range['1'].date, range['1'].month, range['1'].year]);
        const thisAsMoment: Moment = moment([this.date, this.month, this.year]);
        return fromDate.isBefore(thisAsMoment) && toDate.isAfter(thisAsMoment);
    }
}
