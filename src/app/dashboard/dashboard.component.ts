import { Component, OnInit } from '@angular/core';
import { Timesheet } from '../core/models/timesheet/Timesheet.model';
import { TimesheetService } from '../core/services/timesheet.service';
import { TimesheetState } from '../core/models/timesheet/TimesheetState.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../core/models/projects/Project.model';
import { ProjectManagerService } from '../core/services/project-manager.service';
import { LaborCalendarService } from '../core/services/labor-calendar.service';
import { UserService } from '../core/services/user.service';
import { User } from '../core/models/user/User.model';
import { Month } from '../core/models/date-and-time/Month.enum';
import * as moment from 'moment';
import { AppUtils } from '../core/util/AppUtils.util';

@Component({
    selector: 'mm-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {

    public projects: Project[] = [];
    public month: Month = moment().month();
    public months: typeof Month = Month;
    public year: number = moment().year();
    public calendarVisible: boolean = true;
    private _user: User;
    private SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    constructor(private _projectService: ProjectManagerService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute,
                private _laborCalendarService: LaborCalendarService,
                private _userService: UserService) {}

    public ngOnInit() {
        this.projects = this._projectService.getAvailableProjects();
        this._user = this._userService.user;
    }

    public getHoursForProject(project: Project): number {
        return this._laborCalendarService.getHoursForProject(this._user.calendar, project);
    }

    public hasUserSubmittedTime(project: Project): boolean {
        return this._laborCalendarService.containsUserLaborRecord(project.laborCalendar, this._user);
    }

    public toggleCalendarVisibility() {
        this.calendarVisible = !this.calendarVisible;
    }

    public swipe(swipeDir: string = this.SWIPE_ACTION.RIGHT): void {
        if (swipeDir === this.SWIPE_ACTION.RIGHT) {
            this.goToPreviousMonth();
        }
        if (swipeDir === this.SWIPE_ACTION.LEFT) {
            this.goToNextMonth();
        }
    }

    // Private functions

    private goToNextMonth() {
        const monthBefore: number = this.month;
        this.month = AppUtils.properModulus(++this.month, 12);
        if (this.month < monthBefore) {
            this.year++;
        }
    }

    private goToPreviousMonth() {
        const monthBefore: number = this.month;
        this.month = AppUtils.properModulus(--this.month, 12);
        if (this.month > monthBefore) {
            this.year--;
        }
    }
}
