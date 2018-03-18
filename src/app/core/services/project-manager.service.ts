import { Injectable } from '@angular/core';
import { ProjectTask } from '../models/projects/ProjectTask.model';
import { Project } from '../models/projects/Project.model';
import { UserService } from './user.service';
import { User } from '../models/user/User.model';

@Injectable()
export class ProjectManagerService {

    private _availableProjects: Project[] = [];
    private _currentUser: User;

    constructor(private _userService: UserService) {
        // will need account service

        // just creating static projects list
        // this will get redone due to the change of how projects are thought about now
        const pawsTasks: ProjectTask[] = [
            new ProjectTask('Design'),
            new ProjectTask('Environment Setup'),
            new ProjectTask('Organization'),
            new ProjectTask('Deployment'),
            new ProjectTask('Development')
        ];
        const pawsProject: Project = new Project('PAWS Website Redesigned', pawsTasks);
        const testProjectTasks: ProjectTask[] = [
            new ProjectTask('Development'),
            new ProjectTask('Management'),
            new ProjectTask('Research')
        ];
        const testProject: Project = new Project('Test Project', testProjectTasks);
        this._availableProjects.push(pawsProject);
        this._availableProjects.push(testProject);
    }

    /**
     * Retrieves all projects the current user is able to bill to
     */
    public getAvailableProjects(): Project[] {
        // get current user and see what projects they have been added too

        // just use static initialized list for now
        return this._availableProjects;
    }
}
