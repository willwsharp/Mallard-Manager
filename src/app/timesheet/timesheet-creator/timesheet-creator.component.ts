import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectManagerService } from '../../core/services/project-manager.service';
import { Project } from '../../core/models/projects/Project.model';

@Component({
    templateUrl: './timesheet-creator.component.html',
    styles: [
        './timesheet-creator.component.css'
    ]
})
export class TimesheetCreatorComponent {

    public projectCtrl: FormControl;
    public datePeriodCtrl: FormControl;
    public readonly projects: Project[] = [];

    constructor(private _projectService: ProjectManagerService) {
        /**
         * Need to figure out the relationship between a timesheet and a Project.
         * A timesheet's duration or period is generally dictated by the organization,
         * but if we're not enforcing any kind of membership to an organization, then what
         * dictates a user's timesheet period?  The user themself?  The project they're on?
         * This presents a problem.  If we let the timesheet period be decided by the project
         * they're on, then each timesheet can only be matched to one project at a time. On the
         * other hand, if we allow the user to create one timesheet to manage all their projects,
         * how will we reconcile different org's preferences for their timesheet periods?  Not sure
         * how to move forward.
         */
        /**
         * Maybe we allow individual projects within a timesheet to be submitted and kept track of.
         * The timesheet itself is perhaps always a monthly period, but the projects within a timesheet
         * have a designated submission time.  Does that force submission to be on the user?  I think
         * that's the best answer.  We design a ui that will allow a user to submit the work they've
         * done on a specific project.  We also build in feed back to tell them when the timing on each project needs
         * to be submitted by.
         */
        this.projects = this._projectService.getAvailableProjects();
        this.projectCtrl = new FormControl();
        this.datePeriodCtrl = new FormControl();
    }
}
