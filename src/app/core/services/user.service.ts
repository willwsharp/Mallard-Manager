import { Injectable } from '@angular/core';
import { User } from '../models/user/User.model';

@Injectable()
export class UserService {

    private _user: User;

    constructor() {
        this._user = new User('William Sharp', 'willwsharp', 'willwsharp@gmail.com');
    }

    public get user(): User {
        return this.user;
    }
}
