import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';

const routes: Routes = [
    {
        path: ':project-name',
        component: ProjectOverviewComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class ProjectsRoutingModule {

}
