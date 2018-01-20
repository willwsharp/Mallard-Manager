import { Component, Input } from '@angular/core';
import { CalendarDate } from '../../../core/models/CalendarDate.model';

@Component({
    selector: 'mm-date-view',
    templateUrl: './date-view.component.html',
    styleUrls: [
        './date-view.component.css'
    ]
})
export class DateViewComponent {

    @Input() public givenDate: CalendarDate;

    // encapsulating either timesheet or organization preferences
    public requireComment: boolean;
    public displayPreferences: 'by-day' | 'by-half-day' | 'by-hour' | 'by-half-hour' | 'by-quarter-hour' | 'by-tenth-hour';


    // we need services to load timesheet preferences and actual timesheet date
    // how the timesheet is constructed is specified by the owner/admin; this means
    // we need roles (obviously), and perhaps some form of granting/removing permissions
    // to users
    constructor() {
        this.displayPreferences = 'by-day';
    }
}
