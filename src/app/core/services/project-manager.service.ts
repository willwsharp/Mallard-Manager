import { Injectable } from '@angular/core';
import { Project } from '../models/organization/projects/Project.model';
import { ProjectTask } from '../models/organization/projects/ProjectTask.model';

@Injectable()
export class ProjectManagerService {

    private availableProjects: Project[] = [];

    constructor() {
        // will need account service

        // just creating static projects list
        const pawsTasks: ProjectTask[] = [
            new ProjectTask('Design'),
            new ProjectTask('Environment Setup'),
            new ProjectTask('Organization'),
            new ProjectTask('Deployment'),
            new ProjectTask('Development')
        ];
        const pawsProject: Project = new Project('PAWS Website Redesigned', pawsTasks);
        this.availableProjects.push(pawsProject);
    }

    /**
     * Retrieves all projects the current user is able to bill to
     */
    public getAvailableProjects(): Project[] {
        // get current user and see what projects they have been added too

        // just use static initialized list for now
        return this.availableProjects;
    }
}
