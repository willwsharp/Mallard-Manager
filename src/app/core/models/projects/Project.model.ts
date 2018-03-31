import { ProjectTask } from './ProjectTask.model';
import { Preferences } from '../Preferences/Preferences.interface';
import { User } from '../User/User.model';
import { UUIDService } from '../../services/uuid.service';
import { ProjectPreferences } from '../Preferences/ProjectPreferences.model';
import { Validatable } from '../validation/Validatable.interface';
import { Organization } from '../organization/Organization.model';
import { TimeRange } from '../date-and-time/TimeRange.model';
import { CalendarRange } from '../date-and-time/CalendarRange.model';
import { LaborCalendar } from '../labor-calendar/LaborCalendar.model';

export class Project implements Project, Validatable {
    // we'll worry about these later...
    public id: string;
    public preferences: Preferences;
    public members: User[] = [];
    public owner: User;
    public laborCalendar: LaborCalendar;
    // a project does not need to be part of an organization
    public org: Organization | null;
    // lots more properties to come
    constructor(public name: string, public tasks: ProjectTask[] = []) {
        this.id = UUIDService.generateUUID();
    }

    public isValid(): boolean {
        let isValid: boolean = true;
        isValid = isValid && this.name !== '';
        isValid = isValid && this.tasks.length > 0;
        return isValid;
    }
}
