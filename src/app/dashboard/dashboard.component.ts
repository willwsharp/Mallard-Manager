import { Component, OnInit } from '@angular/core';
import { Timesheet } from '../core/models/timesheet/Timesheet.model';
import { TimesheetService } from '../core/services/timesheet.service';
import { TimesheetState } from '../core/models/timesheet/TimesheetState.enum';

@Component({
    selector: 'mm-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {

    public timesheets: Timesheet[] = [];
    public timesheetStates: typeof TimesheetState = TimesheetState;

    constructor(private timesheetService: TimesheetService) {}

    public ngOnInit() {
        this.timesheets = this.timesheetService.getTimesheets();
    }

    public editTimesheet(timesheet: Timesheet) {

    }

    public viewTimesheet(timesheet: Timesheet) {

    }
}