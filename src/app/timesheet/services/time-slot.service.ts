import { Injectable } from '@angular/core';
import { TimeSlot } from '../timesheet-mobile/date-view/models/TimeSlot.model';
import { CalendarDate } from '../../core/models/date-and-time/CalendarDate.model';

/**
 * Manages Timeslot data and preferences
 * @author willwsharp
 */
@Injectable()
export class TimeSlotService {

    // service to load timeslot based on given date goes here
    constructor() { }

    public getTimeSlot(date: CalendarDate) {
        // TODO: use date to get proper timeslot eventually
        return new TimeSlot();
    }

    /**
     * @param timeIndex given time where 0 is 12:00 am
     * @deprecated make sure we can't resuse this for something else before removing
     */
    private calculateTimeRange(timeIndex: number) {
        // AM and PM are called the period in Unicode Standard
        const startPeriod: 'AM' | 'PM' = timeIndex > 11 ? 'PM' : 'AM';
        const endPeriod: 'AM' | 'PM' = ((timeIndex + 1) > 11 && timeIndex !== 23) ? 'PM' : 'AM';
        const start: number = timeIndex % 12 === 0 ? 12 : timeIndex % 12;
        const end: number = (timeIndex + 1) % 12 === 0 ? 12 : (timeIndex + 1) % 12;
        return `${start}:00 ${startPeriod} - ${end}:00 ${endPeriod}`;
    }
}
