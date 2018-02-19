import { BillingTimePrecision } from '../date-and-time/BillingTimePrecision.enum';

export class OrganizationPreferences {
    private _billingPrecisionRequired: boolean = true;
    private _billingPrecision: BillingTimePrecision = BillingTimePrecision.Day;
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
