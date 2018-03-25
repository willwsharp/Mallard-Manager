import { CalendarRange } from '../date-and-time/CalendarRange.model';
import { LaborDate } from './LaborDate.model';

export class LaborCalendar {
    // TODO: We need a way to retrieve archived calendars for users/projects
    public laborDates: LaborDate[] = [];

    constructor(public dateRange: CalendarRange) { }
}
