import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { Job } from '../../core/job/job'
import { JobType } from '../../core/job/jobType'
import { JobStatus} from '../../core/job/jobStatus'

@Component({
    selector: 'job-panel',
    templateUrl: './jobPanel.component.html',
    styles: [require('./jobPanel.component.scss').toString()]
})

export class JobPanelComponent implements OnInit {
    job: Job = new Job(1, JobType.EntityViewStatistic, JobStatus.Waiting);

    isRunning: boolean = false;
    //obText: string;
    @Input() jobType: JobType;
    @Output() submitJob: EventEmitter<any> = new EventEmitter();
    @Output() getJobState: EventEmitter<any> = new EventEmitter();
    @Output() cancelJob: EventEmitter<any> = new EventEmitter();
    @Output() reloadPage: EventEmitter<any> = new EventEmitter();

    get jobText(): string{
        return `${JobType[this.jobType]} Job`;
    }

    constructor() { }

    ngOnInit() { 
        //this.jobText = `${JobType[this.jobType]} job`;
    }

    submit(){
        this.submitJob.emit(null);
        console.log(this.jobType);
    }

    getState(){
        this.getJobState.emit(null);

        switch (this.job.status) {
            case JobStatus.UnKnown: {
                //return AnalysisType.EntitySpace;
            }
            case JobStatus.Waiting: {
                //return AnalysisType.EntitySpace;
            }
            case JobStatus.Running: {
                //return AnalysisType.EntitySpace;
            }
            case JobStatus.Succeeded: {
                this.reloadPage.emit(null);
            }
            case JobStatus.Failed: {
                //return AnalysisType.EntitySpace;
            }
            case JobStatus.Canceled: {
                //return AnalysisType.EntitySpace;
            }
            case JobStatus.TimeOut: {
                //return AnalysisType.EntitySpace;
            }
        }
    }

    cancel(){
        this.cancelJob.emit(null);
    }
}