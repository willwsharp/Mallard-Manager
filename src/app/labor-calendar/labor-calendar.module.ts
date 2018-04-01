import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LaborCalendarComponent } from './labor-calendar.component';
import { LaborDateEditorComponent } from './labor-date-editor/labor-date-editor.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LaborCalendarRoutingModule } from './labor-calendar-routing.module';

@NgModule({
    declarations: [
        LaborCalendarComponent,
        LaborDateEditorComponent
    ],
    imports: [
        LaborCalendarRoutingModule,
        CoreModule,
        CommonModule,
        FormsModule,
    ],
    exports: [
        LaborCalendarComponent
    ]
})
export class LaborCalendarModule { }
