import { Injectable } from '@angular/core';
import { Project } from '../models/projects/Project.model';
import * as _ from 'lodash';
import { TimesheetEntry } from '../../timesheet/timesheet-mobile/models/TimesheetEntry.model';
import { AppUtils } from '../util/AppUtils.util';
import { TimeRange } from '../models/date-and-time/TimeRange.model';
import { LaborCalendar } from '../models/labor-calendar/LaborCalendar.model';
import { LaborDate } from '../models/labor-calendar/LaborDate.model';
import { LaborRecord } from '../models/labor-calendar/LaborRecord.model';
import { User } from '../models/user/User.model';

/**
 * Contains utility functions that can be performed on a LaborCalendar
 * @author willwsharp
 */
@Injectable()
export class LaborCalendarService {
    public getHoursForProject(calendar: LaborCalendar, project: Project): number {
        let result: number = 0;
        if (AppUtils.isDefined(calendar) && AppUtils.isDefined(project)) {
            // this might need to exist elsewhere
            _.each(calendar.laborDates, ((date: LaborDate) => {
                // make sure this date is within the labor calendar's daterange
                if (date.date.inDateRange(project.laborCalendar.dateRange)) {
                    _.each(date.records, (entry: LaborRecord) => {
                        if (_.isEqual(entry.project, project)) {
                            result += entry.getWorkedHours();
                        }
                    });
                }
            }));
        } else {
            throw new Error('Given LaborCalendar or Project was undefined');
        }
        return result;
    }

    public containsUserLaborRecord(calendar: LaborCalendar, user: User): boolean {
        let containsUser: boolean = false;
        if (AppUtils.isDefined(calendar) && AppUtils.isDefined(user)) {
            _.each(calendar.laborDates, ((date: LaborDate) => {
                const foundUser = _.filter(date.records, (record: LaborRecord) => {
                    return _.isEqual(record.user, user);
                });
                if (foundUser.length > 0) {
                    containsUser = true;
                    return false;
                }
            }));
        } else {
            throw new Error('Given LaborCalendar or User was undefined');
        }
        return containsUser;
    }
}
