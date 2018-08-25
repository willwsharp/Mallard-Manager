import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavMenuService } from '../core/services/nav-menu.service';

@Component({
    selector: 'mm-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: [ './app-header.component.css' ]
})
export class AppHeaderComponent {
    @Output() public navMenuOpened: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(private _menuService: NavMenuService, private _router: Router) { }

    public openNavMenu() {
        this.navMenuOpened.emit();
    }

    public get shouldDisplayNavMenu(): boolean {
        return this._menuService.shouldDisplayNavMenu;
    }

    public goBack(): void {
        this._menuService.shouldDisplayNavMenu = true;
        this._router.navigateByUrl('/');
    }

    public get headerText(): string {
        return this._menuService.headerTitle;
    }
}
