import { Component, Input } from '@angular/core';
import { TimeSlot } from '../models/TimeSlot.model';
import { TimesheetEntry } from '../models/TimesheetEntry.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as _ from 'lodash';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { AppUtils } from '../../../core/util/AppUtils.util';
import { CalendarDate } from '../../../core/models/date-and-time/CalendarDate.model';
import { OrganizationPreferencesService } from '../../../core/services/organization-preferences.service';
import { ProjectManagerService } from '../../../core/services/project-manager.service';
import { TimeSlotService } from '../../services/time-slot.service';
import { Time } from '../../../core/models/date-and-time/Time.model';
import { Project } from '../../../core/models/projects/Project.model';
import { ProjectTask } from '../../../core/models/projects/ProjectTask.model';
import { OrganizationPreferences } from '../../../core/models/preferences/OrganizationPreferences.model';

// custom error matcher for the billing time input
class NonNegativeErrorStateMatcher implements ErrorStateMatcher {
    public isErrorState(control: FormControl | null): boolean {
        if (AppUtils.isDefined(control)) {
            return (control.dirty || control.touched) &&
                (AppUtils.isNotDefined(control.value) || control.value <= -1);
        }
    }
}

@Component({
    selector: 'mm-time-slot-editor',
    templateUrl: './time-slot-editor.component.html',
    styleUrls: [
        './time-slot-editor.component.css'
    ]
})
/**
 * Component responsible for managing the TimesheetEntries for a TimeSlot.
 * TODO: add animations when entries are removed/added
 * @author willwsharp
 */
export class TimeSlotEditorComponent implements OnInit {

    @Input() public givenDate: CalendarDate;

    public givenTimeSlot: TimeSlot;
    public availableProjects: Project[] = [];
    public timeSlotHolder: TimeSlot;
    public errorStateMatcher: NonNegativeErrorStateMatcher;
    public orgPreferences: OrganizationPreferences;
    public canLoadTemplate: boolean = false;
    public readonly hoursInDay: ReadonlyArray<number> = _.map(new Array(12), (elem: number, index: number) => {
        if (index === 0) {
            return 12;
        } else {
            return index;
        }
    });
    public allowedMinuteIntervals: number[] = [];

    constructor(private timeslotService: TimeSlotService,
                private projectManager: ProjectManagerService,
                private orgPrefService: OrganizationPreferencesService) { }

    public ngOnInit() {
        this.givenTimeSlot = this.timeslotService.getTimeSlot(this.givenDate);

        this.orgPreferences = this.orgPrefService.getPreferences();
        this.allowedMinuteIntervals = this.orgPrefService.calculateMinuteIntervals();

        this.errorStateMatcher = new NonNegativeErrorStateMatcher();
        this.availableProjects = this.projectManager.getAvailableProjects();

        if (AppUtils.isDefined(this.givenTimeSlot)) {
            this.timeSlotHolder = _.cloneDeep(this.givenTimeSlot);
        }

        this.canLoadTemplate = true;
    }

    public addTimesheetEntry() {
        this.timeSlotHolder.entries.push(new TimesheetEntry());
    }

    public onProjectSelected(project: Project, index: number) {
        this.timeSlotHolder.entries[index].project = project;
    }

    public onTaskSelected(task: ProjectTask, index: number) {
        this.timeSlotHolder.entries[index].task = task;
    }

    public save() {
        this.givenTimeSlot = _.cloneDeep(this.timeSlotHolder);
        // TODO: actually store this somewhere... (firebase)
    }

    public canSave(): boolean {
        let canSave: boolean = true;
        _.each(this.timeSlotHolder.entries, (entry: TimesheetEntry) => {
            canSave = canSave && entry.isValid();
        });
        canSave = canSave && !_.isEqual(this.givenTimeSlot, this.timeSlotHolder);
        return canSave;
    }

    public removeEntry(index: number): void {
        if (AppUtils.isDefined(index)) {
           this.timeSlotHolder.entries.splice(index, 1);
        } else {
            throw new Error('No index given');
        }
    }

    public getErrorMessage(index: number): string {
        let result: string;
        const entry: TimesheetEntry = this.timeSlotHolder.entries[index];
        if (AppUtils.isDefined(entry)) {
            if (entry.billingTime <= -1) {
                result = 'Entered time cannot be negative';
            } else if (AppUtils.isNotDefined(entry.billingTime)) {
                result = 'Invalid hours entered';
            }
        } else {
            console.error('No Timesheet Entry found with that index');
            return '';
        }
        return result;
    }

    public isSelectedPeriod(time: Time, period: 'AM' | 'PM') {
        return time.period === period;
    }

    public switchTimePeriod(time: Time, period: 'AM' | 'PM') {
        time.period = period;
    }

    public getTotalWorkedHours(): number {
        return this.givenTimeSlot.calculateWorkedHours();
    }
}
