import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { AppUtils } from '../../core/util/AppUtils.util';
import { CalendarDate } from '../../core/models/date-and-time/CalendarDate.model';

@Component({
    selector: 'mm-labor-date-editor',
    templateUrl: './labor-date-editor.component.html',
    styleUrls: [ './labor-date-editor.component.css' ]
})
export class LaborDateEditorComponent implements OnInit {

    @Input() public dateToEdit: CalendarDate;
    @Output() editFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

    public noDateGiven: boolean = false;

    constructor() { }

    public ngOnInit() {
        if (AppUtils.isNotDefined(this.dateToEdit)) {
            this.noDateGiven = true;
        }
    }

    public returnToCalendarView() {
        this.editFinished.emit(true);
    }
}
