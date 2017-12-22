import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core'
import {Observable, BehaviorSubject} from 'rxjs/Rx';

import { JobType, JobState, JobPanelState } from '../../core/job/job'
import { AetherJob } from "../../core/job/AetherJob";

@Component({
    selector: 'job-panel',
    templateUrl: './jobPanel.component.html',
    styles: [require('./jobPanel.component.scss').toString()]
})

export class JobPanelComponent implements OnInit {
    //job: AetherJob = new AetherJob();// = new Job(1, 1, JobType.EntityViewStatistic, JobStatus.Waiting);
    //isRunning: boolean;
    virtualClusters: Array<string> = ["https://cosmos08.osdinfra.net/cosmos/Knowledge/", "https://cosmos08.osdinfra.net/cosmos/Knowledge.STCA.prod/"];
    hostId: number;
    timer: Observable<number>;
    
    //the way to pass async object
    // private _job = new BehaviorSubject<AetherJob>(new AetherJob());
    
    // // change data to use getter and setter
    // @Input()
    // set job(value) {
    //     // set the latest value for _data BehaviorSubject
    //     this._job.next(value);
    // };

    // get job() {
    //     // get the latest value from _data BehaviorSubject
    //     return this._job.getValue();
    // }
    

    //cloudPriority: number;
    //obText: string;
    @Input() jobType: JobType;
    @Input() virtualCluster: string;
    @Input() cloudPriority: number;
    @Input() job: AetherJob;
    @Input() submitJob: Function;
    @Input() getJobState: Function;
    @Input() cancelJob: Function;
    @Input() reloadPage: Function;
    @Input() jobPanelState: JobPanelState;

    @Output() virtualClusterChange: EventEmitter<string> = new EventEmitter();
    @Output() cloudPriorityChange: EventEmitter<number> = new EventEmitter();
    // @Output() submitJob: EventEmitter<any> = new EventEmitter();
    // @Output() getJobState: EventEmitter<any> = new EventEmitter();
    // @Output() cancelJob: EventEmitter<any> = new EventEmitter();
    // @Output() reloadPage: EventEmitter<any> = new EventEmitter();

    get jobText(): string{
        return `${JobType[this.jobType]} Job`;
    }

    constructor() { }

    ngOnInit() { 
        this.virtualCluster = "https://cosmos08.osdinfra.net/cosmos/Knowledge/";
        this.cloudPriority = 1000;      
        this.job = new AetherJob();
    }

    submit(){
        this.cloudPriorityChange.emit(this.cloudPriority);
        console.log("cloudPriority-directive", this.cloudPriority);
        this.virtualClusterChange.emit(this.virtualCluster);
        console.log("cloudPriority-directive", this.virtualCluster);
        //this.submitJob.emit(null);
        this.submitJob();
        console.log(this.jobType);
    }

    getState(){
        this.getJobState();

        switch (this.job.state) {
            case JobState.UnKnown: {
                //return AnalysisType.EntitySpace;
            }
            case JobState.Waiting: {
                //return AnalysisType.EntitySpace;
            }
            case JobState.Running: {
                //return AnalysisType.EntitySpace;
            }
            case JobState.Succeeded: {
                //this.reloadPage.emit(null);
            }
            case JobState.Failed: {
                //return AnalysisType.EntitySpace;
            }
            case JobState.Canceled: {
                //return AnalysisType.EntitySpace;
            }
            case JobState.TimeOut: {
                //return AnalysisType.EntitySpace;
            }
        }
    }

    cancel(){
        //this.cancelJob.emit(null);
    }
}