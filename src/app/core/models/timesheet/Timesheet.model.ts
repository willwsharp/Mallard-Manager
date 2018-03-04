import { TimeSlot } from '../../../timesheet/timesheet-mobile/models/TimeSlot.model';
import { Validatable } from '../validation/Validatable.interface';
import { TimesheetState } from './TimesheetState.enum';
import { CalendarRange } from '../date-and-time/CalendarRange.model';

export class Timesheet implements Validatable {

    public slots: TimeSlot[] = [];
    public state: TimesheetState = TimesheetState.Active;
    public dateRange: CalendarRange;

    public isValid(): boolean {
        throw new Error('Method not implemented.');
    }
}
