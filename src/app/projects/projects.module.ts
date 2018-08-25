import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { ProjectEditorComponent } from './project-editor/project-editor.component';
import { ProjectOverviewComponent } from './project-overview/project-overview.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
    declarations: [
        ProjectOverviewComponent,
        ProjectEditorComponent
    ],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        CoreModule
    ]
})
export class ProjectsModule {

}
