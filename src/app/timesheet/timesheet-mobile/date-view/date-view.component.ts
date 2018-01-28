import { Component, Input } from '@angular/core';
import { CalendarDate } from '../../../core/models/CalendarDate.model';
import { TimeSlot } from './models/TimeSlot.model';
import { TimeSlotService } from '../../services/time-slot.service';

@Component({
    selector: 'mm-date-view',
    templateUrl: './date-view.component.html',
    styleUrls: [
        './date-view.component.css'
    ]
})
export class DateViewComponent {

    @Input() public givenDate: CalendarDate;

    public timeSlots: TimeSlot[] = [];

    // we need services to load timesheet preferences and actual timesheet date
    // how the timesheet is constructed is specified by the owner/admin; this means
    // we need roles (obviously), and perhaps some form of granting/removing
    // permissions to users
    constructor(private timeSlotService: TimeSlotService) {
        this.timeSlots = this.timeSlotService.getTimeSlots();
    }
}
