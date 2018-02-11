import { Project } from '../../../../core/models/organization/projects/Project.model';
import { ProjectTask } from '../../../../core/models/organization/projects/ProjectTask.model';
import { AppUtils } from '../../../../core/util/AppUtils.util';
import { Validatable } from '../../../../core/models/validation/Validatable.interface';

export class TimesheetEntry implements Validatable {
    constructor(public project: Project = new Project(''),
                public task: ProjectTask = new ProjectTask(''),
                public billingTime: number = null,
                public comment: string = '') { }

    public isValid(): boolean {
        let isValid: boolean = true;
        isValid = isValid && this.project.isValid();
        isValid = isValid && this.task.isValid();
        isValid = isValid && AppUtils.isDefined(this.billingTime) && this.billingTime > -1;
        return isValid;
    }
}
