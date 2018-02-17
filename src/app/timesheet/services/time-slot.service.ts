import { Injectable } from '@angular/core';
import { TimeSlot } from '../timesheet-mobile/date-view/models/TimeSlot.model';

/**
 * Manages Timeslot data and preferences
 * @author willwsharp
 */
@Injectable()
export class TimeSlotService {

    // encapsulating either timesheet or organization preferences
    public requireComment: boolean;
    // TODO: allow users to fill out what they did for whole day instead of filling out each individual time-slot
    public displayPreferences: 'by-day' | 'by-half-day' | 'by-hour' | 'by-half-hour' | 'by-quarter-hour' | 'by-tenth-hour';

    // service to retrieve timesheet preferences would go here
    constructor() {
        // this will get retrieved by a service eventually
        this.displayPreferences = 'by-hour';
    }

    public getTimeSlots(): TimeSlot[] {
        const result: TimeSlot[] = [];
        if (this.displayPreferences === 'by-day') {
            result.push(new TimeSlot());
        } else if (this.displayPreferences === 'by-half-day') {
            result.push(new TimeSlot('Morning'));
            result.push(new TimeSlot('Afternoon'));
        } else if (this.displayPreferences === 'by-hour') {
            for (let i = 0; i < 24; i++) {
                result.push(new TimeSlot(this.calculateTimeRange(i)));
            }
        }
        return result;
    }

    /**
     * @param timeIndex given time where 0 is 12:00 am
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
