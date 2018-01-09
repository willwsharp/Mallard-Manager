import { Component, Input } from "@angular/core";
import { TimesheetService } from "./timesheet.service";
import { TimesheetDate } from "./models/TimesheetDate.model";
import { CalendarDate } from "../core/models/CalendarDate.model";
import { Month } from "../core/models/Month.enum";
import { MatSlideToggleChange } from "@angular/material";
import * as _ from "lodash";
import { DayOfWeek } from "../core/models/DayOfWeek.enum";

@Component({
    selector: 'mm-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: [
        './timesheet.component.css'
    ]
})
export class TimesheetComponent {

    public displayWeekends: boolean = false;
    public dates: CalendarDate[] = [];
    public givenColumns: 5 | 7 = 5;
    public daysOfWeek: string[] = _.filter(_.keys(DayOfWeek), (key) => !isNaN(Number(DayOfWeek[key])));

    @Input() givenMonth: Month;
    @Input() givenYear: number;

    private datesWithoutWeekends: CalendarDate[] = [];

    constructor(private timesheetService: TimesheetService) { 
        this.dates = this.timesheetService.getTimesheetDates(this.givenMonth, this.givenYear);
        this.datesWithoutWeekends = _.filter(this.dates, {isWeekend: false});
        console.log(this.daysOfWeek);
    }

    public onDisplayWeekendChange(event: MatSlideToggleChange) {
        this.displayWeekends = event.checked;
        this.givenColumns = this.displayWeekends ? 7 : 5;
        if (this.displayWeekends) {
            this.dates
        }
    }

}