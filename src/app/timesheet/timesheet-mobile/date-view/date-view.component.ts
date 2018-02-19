import { Component, Input } from '@angular/core';
import { CalendarDate } from '../../../core/models/date-and-time/CalendarDate.model';
import { TimeSlot } from './models/TimeSlot.model';
import { TimeSlotService } from '../../services/time-slot.service';

/**
 * Responsible for managing the TimeSlot editors
 * @author willwsharp
 */
@Component({
    selector: 'mm-date-view',
    templateUrl: './date-view.component.html',
    styleUrls: [
        './date-view.component.css'
    ]
})
export class DateViewComponent {

    @Input() public givenDate: CalendarDate;

    public timeSlot: TimeSlot;

    // we need services to load timesheet preferences and actual timesheet data
    // how the timesheet is constructed is specified by the owner/admin; this means
    // we need roles (obviously), and perhaps some form of granting/removing
    // permissions to users
    constructor(private timeSlotService: TimeSlotService) {
        this.timeSlot = this.timeSlotService.getTimeSlot(this.givenDate);
    }
}
