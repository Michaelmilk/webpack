import { Component, OnInit } from '@angular/core'

import { Job } from '../../../core/job/job'
import { JobType } from '../../../core/job/jobType'
import { JobStatus} from '../../../core/job/jobStatus'

@Component({
    selector: 'job-panel',
    templateUrl: './jobPanel.component.html',
    styles: [require('./jobPanel.component.scss').toString()]
})

export class JobPanelComponent implements OnInit {
    job: Job = new Job(1, JobType.EntityViewStatistic, JobStatus.Waiting);

    constructor() { }

    ngOnInit() { }
}