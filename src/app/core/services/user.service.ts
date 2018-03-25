import { Injectable } from '@angular/core';
import { User } from '../models/user/User.model';
import { LaborCalendar } from '../models/labor-calendar/LaborCalendar.model';
import { CalendarDate } from '../models/date-and-time/CalendarDate.model';

@Injectable()
export class UserService {

    // will represent the current user
    private _user: User;

    constructor() {
        this._user = new User('William Sharp', 'willwsharp', 'willwsharp@gmail.com');
        this._user.calendar = new LaborCalendar([new CalendarDate(1, 2, 2018), new CalendarDate(31, 2, 2018)]);
    }

    public get user(): User {
        return this._user;
    }
}
