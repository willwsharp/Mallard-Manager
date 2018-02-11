import { ProjectTask } from './ProjectTask.model';
import { Validatable } from '../../validation/Validatable.interface';

export class Project implements Validatable {
    // lots more properties to come
    constructor(public name: string, public tasks: ProjectTask[] = []) { }

    public isValid(): boolean {
        let isValid: boolean = true;
        isValid = isValid && this.name !== '';
        isValid = isValid && this.tasks.length > 0;
        return isValid;
    }
}
