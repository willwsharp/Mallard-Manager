import { AppUtils } from '../../util/AppUtils.util';
import { TimeRange } from '../date-and-time/TimeRange.model';
import { Time } from '../date-and-time/Time.model';
import { Project } from '../projects/Project.model';
import { ProjectTask } from '../projects/ProjectTask.model';
import * as moment from 'moment';
import * as _ from 'lodash';
import { User } from '../user/User.model';

export class LaborRecord {
    public timeRange: TimeRange = [
        new Time(9, 0, 'AM'),
        new Time(5, 0, 'PM')
    ];
    constructor(public user: User,
                public project: Project = new Project(''),
                public task: ProjectTask = new ProjectTask(''),
                public billingTime: number = 0,
                public comment: string = '') { }

    public isValid(): boolean {
        let isValid: boolean;
        isValid = this.project.isValid();
        isValid = isValid && this.task.isValid();
        if (AppUtils.isDefined(this.billingTime)) {
            return isValid && AppUtils.isDefined(this.billingTime) && this.billingTime > -1;
        } else {
            return isValid && (this.getWorkedHours() > 0 && this.containedInDay());
        }
    }

    /**
     * Calculates the amount of hours worked from the given input time range
     */
    public getWorkedHours(): number {
        if (AppUtils.isDefined(this.billingTime)) {
            return this.billingTime;
        } else {
            const startTime: moment.Moment = this.timeRange[0].toMoment();
            const endTime: moment.Moment = this.timeRange[1].toMoment();
            let result: moment.Moment;
            result = endTime.subtract(startTime.minute(), 'minutes');
            result = endTime.subtract(startTime.hour(), 'hours');
            return result.hour() + (result.minute() / 60);
        }
    }

    /**
     * Calculates whether the input time is contained with the current date.
     *
     * As an example, this function would return false for the following time range.
     *
     * `1:00 AM to 12:00 AM;`
     * @returns {boolean} whether the current input time is contained with the
     * current date.
     */
    public containedInDay(): boolean {
        if (AppUtils.isDefined(this.billingTime)) {
            return true;
        } else {
            const startTime: moment.Moment = this.timeRange[0].toMoment();
            const endTime: moment.Moment = this.timeRange[1].toMoment();
            let result: moment.Moment;
            result = endTime.subtract(startTime.minute(), 'minutes');
            result = endTime.subtract(startTime.hour(), 'hours');
            return !_.isEqual(result.day(), moment().subtract(1, 'days').day());
        }
    }
}
