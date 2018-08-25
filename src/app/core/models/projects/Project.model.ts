import { Moment } from 'moment';
import { UUIDService } from '../../services/uuid.service';
import { LaborCalendar } from '../labor-calendar/LaborCalendar.model';
import { Organization } from '../organization/Organization.model';
import { Preferences } from '../preferences/Preferences.interface';
import { User } from '../user/User.model';
import { Validatable } from '../validation/Validatable.interface';
import { ProjectTask } from './ProjectTask.model';

export class Project implements Project, Validatable {
    // we'll worry about these later...
    public id: string;
    public preferences: Preferences;
    public description: string;
    public members: User[] = [];
    public owner: User;
    public laborCalendar: LaborCalendar;
    public createdOn: Moment;
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
