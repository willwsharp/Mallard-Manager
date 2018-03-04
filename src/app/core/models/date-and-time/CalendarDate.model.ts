import { DayOfWeek } from './DayOfWeek.enum';
import { Month } from './Month.enum';

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
}
