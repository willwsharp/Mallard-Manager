import { Timesheet } from '../timesheet/Timesheet.model';
import { Organization } from '../organization/Organization.model';
import { Project } from '../projects/Project.model';
import { UUIDService } from '../../services/uuid.service';
import { UserCalendar } from './UserCalendar.model';

export class User {
    public timesheets: Timesheet[] = [];
    public id: string; // won't be a string for forever
    public calendar: UserCalendar;
    // we'll need more eventually
    constructor(public longName: string, public userName: string, email: string) {
        // temporary for now
        this.id = UUIDService.generateUUID();
    }
}
