import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimesheetModule } from './timesheet/timesheet.module';
import { CoreModule } from './core/core.module';
import { ProjectManagerService } from './core/services/project-manager.service';
import { OrganizationPreferencesService } from './core/services/organization-preferences.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TimesheetModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [ProjectManagerService,
              OrganizationPreferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
