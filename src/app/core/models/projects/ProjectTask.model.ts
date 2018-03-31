import { Validatable } from '../validation/Validatable.interface';

export class ProjectTask implements Validatable {
    constructor(public name: string) {}

    public isValid(): boolean {
        return this.name !== '';
    }
}
