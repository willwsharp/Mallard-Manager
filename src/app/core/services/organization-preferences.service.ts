import { Injectable } from '@angular/core';
import { BillingTimePrecision } from '../models/date-and-time/BillingTimePrecision.enum';
import * as _ from 'lodash';
import { OrganizationPreferences } from '../models/preferences/OrganizationPreferences.model';
/**
 * Responsible for loading the preferences of the current user's organization
 * @author willwsharp
 */
@Injectable()
export class OrganizationPreferencesService {

    private _preferences: OrganizationPreferences;
    // potential service to query firebase backend may go here... or this service might take care of that itself
    constructor() {
        // only here temporarily
        this._preferences = new OrganizationPreferences();
     }

    public getPreferences() {
        // use service eventually
        return this._preferences;
    }

    public calculateMinuteIntervals(): number[] {
        let result: number[];
        switch (this._preferences.billingPrecision) {
            case BillingTimePrecision.Hour:
                result = [0];
                break;
            case BillingTimePrecision.HalfHour:
                result = [0, 30];
                break;
            case BillingTimePrecision.QuarterHour:
                result = [0, 15, 30, 45];
                break;
            case BillingTimePrecision.TenthHour:
                result = _.map(new Array(60), (elem: number, index: number) => {
                    if (index % 6 === 0 && index !== 60) {
                        return index;
                    }
                });
                _.remove(result, (elem: number) => {
                    return elem === undefined;
                });
                break;
        }
        return result;
    }
}
