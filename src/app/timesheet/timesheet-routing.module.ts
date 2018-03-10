import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetComponent } from './timesheet.component';

const timesheetRoutes: Routes = [
    // TODO: add view/save routes later
    { path: 'timesheets/:id', component: TimesheetComponent },
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
