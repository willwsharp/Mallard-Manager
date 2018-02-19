import { TimesheetEntry } from './TimesheetEntry.model';

export class TimeSlot {
    // more properties to come here
    constructor(public entries: TimesheetEntry[] = []) { }
}
