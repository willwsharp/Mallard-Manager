import { Component, Output, EventEmitter } from '@angular/core';
import { NavMenuService } from '../core/services/nav-menu.service';

@Component({
    selector: 'mm-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: [ './app-header.component.css' ]
})
export class AppHeaderComponent {
    @Output() public navMenuOpened: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _menuService: NavMenuService) { }

    public openNavMenu() {
        this.navMenuOpened.emit();
    }

    public get headerText(): string {
        return this._menuService.headerTitle;
    }
}
