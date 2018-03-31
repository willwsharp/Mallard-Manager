import { Organization } from '../organization/Organization.model';
import { Project } from '../projects/Project.model';
import { UUIDService } from '../../services/uuid.service';
import { LaborCalendar } from '../labor-calendar/LaborCalendar.model';

export class User {
    public id: string; // won't be a string for forever
    public calendar: LaborCalendar;
    public projects: Project[] = [];
    // we'll need more eventually
    constructor(public longName: string, public userName: string, email: string) {
        // temporary for now
        this.id = UUIDService.generateUUID();
    }
}
