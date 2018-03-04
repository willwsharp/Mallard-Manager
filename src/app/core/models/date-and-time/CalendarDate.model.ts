import { DayOfWeek } from './DayOfWeek.enum';
import { Month } from './Month.enum';
import * as moment from 'moment';

export class CalendarDate {
    constructor(
        public date: number,
        public dayOfWeek: DayOfWeek,
        public month: Month,
        public year: number,
        public isWeekend: boolean) { }

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
}
