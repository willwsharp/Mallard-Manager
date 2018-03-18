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
            new CalendarDate(1, DayOfWeek.Thur, Month.March, 2018, false),
            new CalendarDate(31, DayOfWeek.Sat, Month.March, 2018, true)
        ];
        currentTimesheet.id = UUIDService.generateUUID();

        const anotherOpenTimesheet: Timesheet = new Timesheet();
        anotherOpenTimesheet.dateRange = [
            // this will be done automatically
            new CalendarDate(1, DayOfWeek.Sun, Month.April, 2018, true),
            new CalendarDate(30, DayOfWeek.Mon, Month.April, 2018, false)
        ];
        anotherOpenTimesheet.id = UUIDService.generateUUID();


        const waitingForApprovalTimesheet: Timesheet = new Timesheet();
        waitingForApprovalTimesheet.dateRange = [
            new CalendarDate(1, DayOfWeek.Thur, Month.February, 2018, false),
            new CalendarDate(28, DayOfWeek.Wed, Month.February, 2018, false)
        ];
        waitingForApprovalTimesheet.state = TimesheetState.WaitingForApproval;
        waitingForApprovalTimesheet.id = UUIDService.generateUUID();

        const closedTimesheet: Timesheet = new Timesheet();
        closedTimesheet.dateRange = [
            new CalendarDate(1, DayOfWeek.Mon, Month.January, 2018, false),
            new CalendarDate(31, DayOfWeek.Wed, Month.January, 2018, false)
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
