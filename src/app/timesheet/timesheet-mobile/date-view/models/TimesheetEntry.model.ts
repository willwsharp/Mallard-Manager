import { Project } from '../../../../core/models/organization/projects/Project.model';
import { ProjectTask } from '../../../../core/models/organization/projects/ProjectTask.model';

export class TimesheetEntry {
    constructor(public project: Project, public task: ProjectTask, public billingTime: number) { }
}
