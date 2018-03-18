import { Injectable } from '@angular/core';
import { UserCalendar } from '../models/user/UserCalendar.model';
import { Project } from '../models/projects/Project.model';
import * as _ from 'lodash';
import { TimesheetEntry } from '../../timesheet/timesheet-mobile/models/TimesheetEntry.model';
import { AppUtils } from '../util/AppUtils.util';
import { TimeRange } from '../models/date-and-time/TimeRange.model';

/**
 * Contains utility functions that can be performed on a given UserCalendar
 */
@Injectable()
export class UserCalendarService {

    public getHoursForProject(calendar: UserCalendar, project: Project): number {
        let result: number = 0;
        if (AppUtils.isDefined(calendar) && AppUtils.isDefined(project)) {
            _.each(calendar.entries, (entry: TimesheetEntry) => {
            if (_.isEqual(entry.project, project)) {
                const date: TimeRange = entry.timeRange;
            }
            });
        } else {
            throw new Error('Given UserCalendar or Project was undefined');
        }
        return result;
    }

    public getTotalHoursForProject(calendar: UserCalendar, project: Project) {
        // TODO: fill this out later
    }
}
