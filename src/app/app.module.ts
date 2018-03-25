import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimesheetModule } from './timesheet/timesheet.module';
import { CoreModule } from './core/core.module';
import { ProjectManagerService } from './core/services/project-manager.service';
import { OrganizationPreferencesService } from './core/services/organization-preferences.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { TimesheetService } from './core/services/timesheet.service';
import { AppRoutingModule } from './app-routing.module';
import { UUIDService } from './core/services/uuid.service';
import { UserService } from './core/services/user.service';
import { LaborCalendarService } from './core/services/labor-calendar.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimesheetModule,
    DashboardModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    TimesheetService,
    ProjectManagerService,
    OrganizationPreferencesService,
    UserService,
    LaborCalendarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
