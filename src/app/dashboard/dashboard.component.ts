import { Component, OnInit } from '@angular/core';
import { Timesheet } from '../core/models/timesheet/Timesheet.model';
import { TimesheetService } from '../core/services/timesheet.service';
import { TimesheetState } from '../core/models/timesheet/TimesheetState.enum';
import { Router, ActivatedRoute } from '@angular/router';

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

    constructor(private _timesheetService: TimesheetService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute) {}

    public ngOnInit() {
        this.timesheets = this._timesheetService.getTimesheets();
    }

    public editTimesheet(timesheet: Timesheet) {
        this._router.navigateByUrl(`/timesheets/view/${timesheet.id}`);
    }

    public createTimesheet() {
        this._router.navigateByUrl('/timesheets/create');
    }
}
