import { BillingTimePrecision } from '../date-and-time/BillingTimePrecision.enum';
import { Preferences } from '../preferences/preferences.interface';
import { Organization } from '../organization/Organization.model';

/**
 * Data associated with a given organization's preferences.
 * @author willwsharp
 */
export class OrganizationPreferences implements Preferences {
    public entity: Organization;
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
