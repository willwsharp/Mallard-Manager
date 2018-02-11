import { Component, Input } from '@angular/core';
import { TimeSlot } from '../models/TimeSlot.model';
import { TimesheetEntry } from '../models/TimesheetEntry.model';
import { Project } from '../../../../core/models/organization/projects/Project.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProjectManagerService } from '../../../../core/services/project-manager.service';
import { ProjectTask } from '../../../../core/models/organization/projects/ProjectTask.model';
import _ = require('lodash');
import { AppUtils } from '../../../../core/util/AppUtils.util';

@Component({
    selector: 'mm-time-slot-editor',
    templateUrl: './time-slot-editor.component.html',
    styleUrls: [
        './time-slot-editor.component.css'
    ]
})
export class TimeSlotEditorComponent implements OnInit {

    @Input() public givenTimeSlot: TimeSlot;

    public availableProjects: Project[] = [];
    public timeSlotHolder: TimeSlot;

    constructor(private projectManager: ProjectManagerService) {}

    public ngOnInit() {
        this.availableProjects = this.projectManager.getAvailableProjects();

        if (AppUtils.isDefined(this.givenTimeSlot)) {
            this.timeSlotHolder = _.cloneDeep(this.givenTimeSlot);
        }
    }

    public addTimesheetEntry() {
        this.timeSlotHolder.entries.push(new TimesheetEntry());
    }

    public onProjectSelected(project: Project, index: number) {
        this.timeSlotHolder.entries[index].project = project;
    }

    public onTaskSelected(task: ProjectTask, index: number) {
        this.timeSlotHolder.entries[index].task = task;
    }

    public save() {
        this.givenTimeSlot = _.cloneDeep(this.timeSlotHolder);
        // TODO: actually store this somewhere... (firebase)
    }

    public canSave(): boolean {
        let canSave: boolean = true;
        _.each(this.timeSlotHolder.entries, (entry: TimesheetEntry) => {
            canSave = canSave && entry.isValid();
        });
        canSave = canSave && !_.isEqual(this.givenTimeSlot, this.timeSlotHolder);
        return canSave;
    }

    public removeEntry(index: number): void {
        if (AppUtils.isDefined(index)) {
           this.timeSlotHolder.entries.splice(index, 1);
        } else {
            throw new Error('No index given');
        }
    }
}
