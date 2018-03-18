import { TimeRange } from '../date-and-time/TimeRange.model';
import { User } from './User.model';
import { TimesheetEntry } from '../../../timesheet/timesheet-mobile/models/TimesheetEntry.model';

export class UserCalendar {
    public timePeriod: TimeRange;
    public user: User; // might not be necessary
    public entries: TimesheetEntry[] = [];
}
