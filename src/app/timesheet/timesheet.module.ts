import { NgModule } from "@angular/core";
import { TimesheetComponent } from "./timesheet.component";
import { TimesheetService } from "./timesheet.service";
import { MaterialModule } from "../core/material-components/material.module";

@NgModule({
    declarations: [
        TimesheetComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        TimesheetComponent
    ],
    providers: [
        TimesheetService
    ]
})
export class TimesheetModule {

}