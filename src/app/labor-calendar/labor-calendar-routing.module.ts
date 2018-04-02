import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaborCalendarComponent } from './labor-calendar.component';
import { LaborDateEditorComponent } from './labor-date-editor/labor-date-editor.component';

const routes: Routes = [
    // TODO: add view/save routes later
    {
        path: 'labor-calendar/editor',
        component: LaborDateEditorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class LaborCalendarRoutingModule { }
