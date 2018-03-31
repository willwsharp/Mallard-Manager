import { TimesheetEntry } from './TimesheetEntry.model';
import * as _ from 'lodash';

export class TimeSlot {
    // more properties to come here
    constructor(public entries: TimesheetEntry[] = []) { }

    public calculateWorkedHours(): number {
        return _.sum(_.map(this.entries, (entry) => entry.getWorkedHours()));
    }
}
