import { Component, Output, EventEmitter, Input, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';
import { AppUtils } from '../../core/util/AppUtils.util';
import { CalendarDate } from '../../core/models/date-and-time/CalendarDate.model';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { CastExpr } from '@angular/compiler';
import { LaborDate } from '../../core/models/labor-calendar/LaborDate.model';
import { LaborRecord } from '../../core/models/labor-calendar/LaborRecord.model';
import { UserService } from '../../core/services/user.service';
import { Project } from '../../core/models/projects/Project.model';
import { ProjectManagerService } from '../../core/services/project-manager.service';
import { ProjectTask } from '../../core/models/projects/ProjectTask.model';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';

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
    selector: 'mm-labor-date-editor',
    templateUrl: './labor-date-editor.component.html',
    styleUrls: [ './labor-date-editor.component.css' ]
})
export class LaborDateEditorComponent implements OnInit {

    @Output() public editFinished: EventEmitter<boolean> = new EventEmitter<boolean>();
    public laborDateToEdit: LaborDate;
    public availableProjects: Project[] = [];
    public errorStateMatcher: NonNegativeErrorStateMatcher;
    public noDateGiven: boolean = false;

    private _originalLaborDate: LaborDate;
    @HostBinding('class') private _hostClass: string = 'fill-to-expand-page';
    constructor(private _route: ActivatedRoute,
                private _userService: UserService,
                private _projectService: ProjectManagerService,
                private _changeDetectorRef: ChangeDetectorRef) { }

    public ngOnInit() {
        this._originalLaborDate = new LaborDate(CalendarDate.fromDashSeparatedString(this._route.snapshot.paramMap.get('givenDate')));
        this.laborDateToEdit = _.cloneDeep(this._originalLaborDate);
        // TODO get user's labor entries for the current date here and make a copy of it...
        if (AppUtils.isNotDefined(this.laborDateToEdit)) {
            this.noDateGiven = true;
        }
        this.availableProjects = this._projectService.getAvailableProjects();
        this.errorStateMatcher = new NonNegativeErrorStateMatcher();
    }

    public returnToCalendarView() {
        this.editFinished.emit(true);
    }

    public addRecord() {
        this.laborDateToEdit.records.push(new LaborRecord(this._userService.user));
        this._changeDetectorRef.detectChanges();
    }

    public onProjectSelected(project: Project, index: number) {
        this.laborDateToEdit.records[index].project = project;
    }

    public onTaskSelected(task: ProjectTask, index: number) {
        this.laborDateToEdit.records[index].task = task;
    }

    public getErrorMessage(index: number): string {
        let result: string;
        const record: LaborRecord = this.laborDateToEdit.records[index];
        if (AppUtils.isDefined(record)) {
            if (record.billingTime <= -1) {
                result = 'Entered time cannot be negative';
            } else if (AppUtils.isNotDefined(record.billingTime)) {
                result = 'Invalid hours entered';
            }
        } else {
            console.error('No Timesheet Entry found with that index');
            return '';
        }
        return result;
    }

    public commentRequired(project: Project): boolean {
        if (AppUtils.isDefined(project) && AppUtils.isDefined(project.preferences)) {
            return project.preferences.commentRequired;
        }
        return false;
    }

    public canSave(): boolean {
        let canSave: boolean = true;
        _.each(this.laborDateToEdit.records, (record: LaborRecord) => {
            canSave = canSave && record.isValid();
        });
        canSave = canSave && !_.isEqual(this._originalLaborDate, this.laborDateToEdit);
        return canSave;
    }

    public saveLaborDate(): void {
        this._originalLaborDate = _.cloneDeep(this.laborDateToEdit);
        // TODO: actually store this somewhere... (firebase)
    }

    public removeRecord(index: number): void {
        if (AppUtils.isDefined(index)) {
           this.laborDateToEdit.records.splice(index, 1);
        } else {
            throw new Error('No index given');
        }
    }
}
