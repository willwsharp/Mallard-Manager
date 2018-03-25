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

@Component({
    selector: 'mm-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {

    public projects: Project[] = [];

    private _user: User;

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

    public editTimesheet(timesheet: Timesheet) {
        this._router.navigateByUrl(`/timesheets/view/${timesheet.id}`);
    }

    public createTimesheet() {
        this._router.navigateByUrl('/timesheets/create');
    }
}
