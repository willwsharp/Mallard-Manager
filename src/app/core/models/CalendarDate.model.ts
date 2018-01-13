import { DayOfWeek } from './DayOfWeek.enum';
import { Month } from './Month.enum';

export interface CalendarDate {
    // number in month
    date: number;
    dayOfWeek: DayOfWeek;
    month: Month;
    year: number;
    isWeekend: boolean;
}