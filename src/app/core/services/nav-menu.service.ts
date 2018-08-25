import { Injectable } from '@angular/core';

@Injectable()
export class NavMenuService {
    public headerTitle: string = 'Dashboard';
    public shouldDisplayNavMenu: boolean = false;
}
