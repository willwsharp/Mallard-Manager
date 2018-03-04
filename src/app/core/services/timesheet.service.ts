import { Injectable } from '@angular/core';
import { Timesheet } from '../models/timesheet/Timesheet.model';
import { CalendarDate } from '../models/date-and-time/CalendarDate.model';
import { DayOfWeek } from '../models/date-and-time/DayOfWeek.enum';
import { Month } from '../models/date-and-time/Month.enum';
import { TimesheetState } from '../models/timesheet/TimesheetState.enum';

@Injectable()
export class TimesheetService {

    private _timesheets: Timesheet[] = [];

    constructor() {
        // doing this here for now... will retrieve from service eventually
        const currentTimesheet: Timesheet = new Timesheet();
        currentTimesheet.dateRange = [
            // this will be done automatically
            new CalendarDate(1, DayOfWeek.Thur, Month.March, 2018, false),
            new CalendarDate(31, DayOfWeek.Sat, Month.March, 2018, true)
        ];

        const waitingForApprovalTimesheet: Timesheet = new Timesheet();
        waitingForApprovalTimesheet.dateRange = [
            new CalendarDate(1, DayOfWeek.Thur, Month.February, 2018, false),
            new CalendarDate(28, DayOfWeek.Wed, Month.February, 2018, false)
        ];
        waitingForApprovalTimesheet.state = TimesheetState.WaitingForApproval;

        const closedTimesheet: Timesheet = new Timesheet();
        closedTimesheet.dateRange = [
            new CalendarDate(1, DayOfWeek.Mon, Month.January, 2018, false),
            new CalendarDate(31, DayOfWeek.Wed, Month.January, 2018, false)
        ];
        closedTimesheet.state = TimesheetState.Closed;

        this._timesheets = [
            currentTimesheet,
            waitingForApprovalTimesheet,
            closedTimesheet
        ];
    }

    public getTimesheets(): Timesheet[] {
        return this._timesheets;
    }
}
