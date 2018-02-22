/**
 * Class to encapsulate a time in the day.
 * @author willwsharp
 */
export class Time {
    constructor(private _hour: number = 12,
                private _minute: number = 0,
                private _period: 'AM' | 'PM' = 'AM') { }

    public get hour() {
        return this._hour;
    }

    public set hour(v: number) {
        this._hour = v % 12;
    }

    public get minute() {
        return this._minute;
    }

    public set minute(v: number) {
        this._minute = v % 60;
    }

    public get period() {
        return this._period;
    }

    public set period(v: 'AM' | 'PM') {
        if (v === 'AM' || 'PM') {
            this._period = v;
        } else {
            console.warn(`Invalid period attempted to be set.  Expected AM or PM but found: ${v}`);
        }
    }
}
