import { Injectable } from '@angular/core';
import { OrganizationPreferences } from '../models/organization/OrganizationPreferences.model';
/**
 * Responsible for loading the preferences of the current user's organization
 * @author willwsharp
 */
@Injectable()
export class OrganizationPreferencesService {

    // potential service to query firebase backend may go here... or this service might take care of that itself
    constructor() { }

    public getPreferences() {
        // use service eventually
        return new OrganizationPreferences();
    }
}
