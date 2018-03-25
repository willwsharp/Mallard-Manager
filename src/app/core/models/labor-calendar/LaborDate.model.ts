import { CalendarDate } from '../date-and-time/CalendarDate.model';
import { LaborRecord } from './LaborRecord.model';
import * as _ from 'lodash';

export class LaborDate {
    public records: LaborRecord[] = [];
    constructor(public date: CalendarDate) { }

    public calculateWorkedHours(): number {
        return _.sum(_.map(this.records, (record: LaborRecord) => record.getWorkedHours()));
    }
}
