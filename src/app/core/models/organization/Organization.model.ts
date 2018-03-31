import { User } from '../user/User.model';
import { OrganizationPreferences } from '../preferences/OrganizationPreferences.model';

export class Organization {
    public name: string;
    public id: string; // won't be a string for forever...
    public preferences: OrganizationPreferences;
    public admin: User; // might change into something else to allow multiple users to be admin
}
