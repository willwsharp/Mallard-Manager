import { BillingTimePrecision } from '../date-and-time/BillingTimePrecision.enum';
import { Organization } from '../organization/Organization.model';
import { Project } from '../projects/Project.model';

export interface Preferences {
    billingPrecisionRequired: boolean;
    billingPrecision: BillingTimePrecision;
    commentRequired: boolean;
    entity: Organization | Project; // might need to get wrapped into a specific type eventually
}
