import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetCreatorComponent } from './timesheet-creator/timesheet-creator.component';
import { TimesheetViewerComponent } from './timesheet-viewer/timesheet-viewer.component';

const timesheetRoutes: Routes = [
    // TODO: add view/save routes later
    {
        path: 'timesheets',
        component: TimesheetComponent,
        children: [
            {
                path: 'create',
                component: TimesheetCreatorComponent
            },
            {
                path: 'view/:id',
                component: TimesheetViewerComponent
            }
        ]
    },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forChild(timesheetRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class TimesheetRoutingModule { }
