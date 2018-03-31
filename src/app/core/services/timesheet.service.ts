import { Injectable } from '@angular/core';
import { Timesheet } from '../models/timesheet/Timesheet.model';
import { CalendarDate } from '../models/date-and-time/CalendarDate.model';
import { DayOfWeek } from '../models/date-and-time/DayOfWeek.enum';
import { Month } from '../models/date-and-time/Month.enum';
import { TimesheetState } from '../models/timesheet/TimesheetState.enum';
import { UUIDService } from './uuid.service';
import * as _ from 'lodash';

@Injectable()
export class TimesheetService {

    private _timesheets: Timesheet[] = [];

    constructor() {
        // doing this here for now... will retrieve from service eventually
        const currentTimesheet: Timesheet = new Timesheet();
        currentTimesheet.dateRange = [
            // this will be done automatically
            new CalendarDate(1, Month.March, 2018),
            new CalendarDate(31, Month.March, 2018)
        ];
        currentTimesheet.id = UUIDService.generateUUID();

        const anotherOpenTimesheet: Timesheet = new Timesheet();
        anotherOpenTimesheet.dateRange = [
            // this will be done automatically
            new CalendarDate(1, Month.April, 2018),
            new CalendarDate(30, Month.April, 2018)
        ];
        anotherOpenTimesheet.id = UUIDService.generateUUID();


        const waitingForApprovalTimesheet: Timesheet = new Timesheet();
        waitingForApprovalTimesheet.dateRange = [
            new CalendarDate(1, Month.February, 2018),
            new CalendarDate(28, Month.February, 2018)
        ];
        waitingForApprovalTimesheet.state = TimesheetState.WaitingForApproval;
        waitingForApprovalTimesheet.id = UUIDService.generateUUID();

        const closedTimesheet: Timesheet = new Timesheet();
        closedTimesheet.dateRange = [
            new CalendarDate(1, Month.January, 2018),
            new CalendarDate(31, Month.January, 2018)
        ];
        closedTimesheet.state = TimesheetState.Closed;
        closedTimesheet.id = UUIDService.generateUUID();

        this._timesheets = [
            currentTimesheet,
            anotherOpenTimesheet,
            waitingForApprovalTimesheet,
            closedTimesheet
        ];
    }

    public getTimesheets(): Timesheet[] {
        return this._timesheets;
    }

    public getTimesheet(id: string): Timesheet {
        return _.find(this._timesheets, {id: id });
    }
}
