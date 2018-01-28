import { Component, Input } from '@angular/core';
import { TimeSlot } from '../models/TimeSlot.model';
import { TimesheetEntry } from '../models/TimesheetEntry.model';
import { Project } from '../../../../core/models/organization/projects/Project.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ProjectManagerService } from '../../../../core/services/project-manager.service';
import { ProjectTask } from '../../../../core/models/organization/projects/ProjectTask.model';

@Component({
    selector: 'mm-time-slot-editor',
    templateUrl: './time-slot-editor.component.html',
    styleUrls: [
        './time-slot-editor.component.css'
    ]
})
export class TimeSlotEditorComponent implements OnInit {

    @Input() public givenTimeSlot: TimeSlot;

    public availableProjects: Project[];
    public availableTasks: ProjectTask[];
    public selectedProject: Project;

    constructor(private projectManager: ProjectManagerService) {}

    public ngOnInit() {
        this.availableProjects = this.projectManager.getAvailableProjects();
    }

    public addTimesheetEntry() {
        this.givenTimeSlot.entries.push(new TimesheetEntry(null, null, 0));
    }

    public projectSelected(project: Project) {
        this.selectedProject = project;
    }
}
