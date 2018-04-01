import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatExpansionModule, MatListModule, MatDividerModule } from '@angular/material';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from '../core/core.module';
import { LaborCalendarModule } from '../labor-calendar/labor-calendar.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CoreModule,
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatIconModule,
        MatExpansionModule,
        DashboardRoutingModule,
        MatListModule,
        MatDividerModule,
        LaborCalendarModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {

}
