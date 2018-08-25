import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../core/models/projects/Project.model';
import { User } from '../../core/models/user/User.model';
import { NavMenuService } from '../../core/services/nav-menu.service';
import { ProjectManagerService } from '../../core/services/project-manager.service';
import { UserService } from '../../core/services/user.service';

@Component({
    templateUrl: './project-overview.component.html',
    styleUrls: [ './project-overview.component.css' ]
})
export class ProjectOverviewComponent implements OnInit {

    public viewedProject: Project;
    public user: User;

    constructor(private _route: ActivatedRoute,
                private _userService: UserService,
                private _menuService: NavMenuService,
                private _projectManagerService: ProjectManagerService) { }

    public ngOnInit() {
        const projName: string = this._route.snapshot.paramMap.get('project-name');
        this._menuService.headerTitle = projName;
        this._menuService.shouldDisplayNavMenu = false;
        this.viewedProject = this._projectManagerService.getProjectByName(projName);
        this.user = this._userService.user;
    }
}
