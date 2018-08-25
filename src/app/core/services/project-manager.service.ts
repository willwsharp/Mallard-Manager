import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { CalendarDate } from '../models/date-and-time/CalendarDate.model';
import { LaborCalendar } from '../models/labor-calendar/LaborCalendar.model';
import { Project } from '../models/projects/Project.model';
import { ProjectTask } from '../models/projects/ProjectTask.model';
import { User } from '../models/user/User.model';
import { UserService } from './user.service';

@Injectable()
export class ProjectManagerService {

    private _availableProjects: Project[] = [];
    private _currentUser: User;

    constructor(private _userService: UserService) {
        // will need account service
        this._currentUser = this._userService.user;
        // just creating static projects list
        // this will get redone due to the change of how projects are thought about now
        const pawsTasks: ProjectTask[] = [
            new ProjectTask('Design'),
            new ProjectTask('Environment Setup'),
            new ProjectTask('Organization'),
            new ProjectTask('Deployment'),
            new ProjectTask('Development')
        ];
        const pawsProject: Project = new Project('PAWS-Website-Redesigned', pawsTasks);
        pawsProject.description = `Redesigning Pat Woodward's Website.`;
        pawsProject.members.push(new User('Jon Doe', 'jondoe65', 'jondoe83@test-email.com'));
        pawsProject.members.push(new User('Alice Diddly', 'aDiddle1', 'alice.diddly@test-email.com'));
        pawsProject.members.push(new User('Hank Mardukas', 'TheIncrediblyHank69', 'mommasboy72@test-email.com'));
        const fromDate: CalendarDate = new CalendarDate(1, 2, 2018);
        const toDate: CalendarDate = new CalendarDate(31, 2, 2018);
        pawsProject.laborCalendar = new LaborCalendar([fromDate, toDate]);
        pawsProject.owner = this._userService.user;
        const testProjectTasks: ProjectTask[] = [
            new ProjectTask('Development'),
            new ProjectTask('Management'),
            new ProjectTask('Research')
        ];
        const testProject: Project = new Project('Test-Project', testProjectTasks);
        this._availableProjects.push(pawsProject);
        // this._availableProjects.push(testProject);
    }

    /**
     * Retrieves all projects the current user is a member of
     */
    public getAvailableProjects(): Project[] {
        // get current user and see what projects they have been added too

        // just use static initialized list for now
        return this._availableProjects;
    }

    public getProjectByName(projName: string): Project {
        // TODO this will eventually query all projects not just available projects
        return _.find(this._availableProjects, { name: projName });
    }
}
