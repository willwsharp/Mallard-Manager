import { ProjectTask } from './ProjectTask.model';

export class Project {
    // lots more properties to come
    constructor(public name: string, public tasks: ProjectTask[]) { }
}
