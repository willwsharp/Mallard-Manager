import { Injectable } from '@angular/core';
import { TimeSlot } from '../timesheet-mobile/date-view/models/TimeSlot.model';

@Injectable()
export class TimeSlotService {

    // encapsulating either timesheet or organization preferences
    public requireComment: boolean;
    // TODO: allow users to fill out what they did for whole day instead of filling out each individual time-slot
    public displayPreferences: 'by-day' | 'by-half-day' | 'by-hour' | 'by-half-hour' | 'by-quarter-hour' | 'by-tenth-hour';

    // service to retrieve timesheet preferences would go here
    constructor() {
        // this will get retrieved by a service eventually
        this.displayPreferences = 'by-day';
    }

    public getTimeSlots(): TimeSlot[] {
        const result: TimeSlot[] = [];

        if (this.displayPreferences === 'by-day') {
            result.push(new TimeSlot());
        }

        return result;
    }
}
