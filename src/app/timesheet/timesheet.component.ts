import { Component } from "@angular/core";
import { TimesheetService } from "./timesheet.service";

@Component({
    selector: 'mm-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: [
        './timesheet.component.css'
    ]
})
export class TimesheetComponent {

    public displayWeekends: boolean = false;
    

    constructor(timesheetService: TimesheetService) { }

}