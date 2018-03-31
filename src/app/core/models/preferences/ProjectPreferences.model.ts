import { Preferences } from '../preferences/preferences.interface';
import { BillingTimePrecision } from '../date-and-time/BillingTimePrecision.enum';
import { Project } from '../projects/Project.model';

/**
 * Represents similar customization to @see OrganizationPreferences, but on a Project level.
 * @see OrganizationPreferences take precedence for a @see Project if there is a conflict.
 * Designed mainly for users who want to create a @see UserProject.
 */
export class ProjectPreferences implements Preferences {
    // more to come here...
    public entity: Project;
    private _billingPrecisionRequired: boolean = true;
    private _billingPrecision: BillingTimePrecision = BillingTimePrecision.TenthHour;
    private _commentRequired: boolean = false;

    public get billingPrecisionRequired(): boolean {
        return this._billingPrecisionRequired;
    }

    public get billingPrecision(): BillingTimePrecision {
        return this._billingPrecision;
    }

    public get commentRequired(): boolean {
        return this._commentRequired;
    }
}
