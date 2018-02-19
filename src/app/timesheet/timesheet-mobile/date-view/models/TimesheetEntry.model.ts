import { Project } from '../../../../core/models/organization/projects/Project.model';
import { ProjectTask } from '../../../../core/models/organization/projects/ProjectTask.model';
import { AppUtils } from '../../../../core/util/AppUtils.util';
import { Validatable } from '../../../../core/models/validation/Validatable.interface';
import { TimeRange } from '../../../../core/models/date-and-time/TimeRange.mode';
import { Time } from '../../../../core/models/date-and-time/Time.model';

export class TimesheetEntry implements Validatable {

    public readonly timeRange: TimeRange = [new Time(), new Time()];

    constructor(public project: Project = new Project(''),
                public task: ProjectTask = new ProjectTask(''),
                public billingTime: number = null,
                public comment: string = '') { }

    public isValid(): boolean {
        let isValid: boolean;
        isValid = this.project.isValid();
        isValid = isValid && this.task.isValid();
        return isValid && AppUtils.isDefined(this.billingTime) && this.billingTime > -1;
    }
}
