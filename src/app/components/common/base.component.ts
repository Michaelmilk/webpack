import { Component, OnInit } from '@angular/core';
import {
	HttpClient,
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";

import { AnalysisType } from '../../core/enums'
import { JobType } from '../../core/job/jobType'
import { JobStatus } from '../../core/job/jobStatus'

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseComponent implements OnInit {
    AnalysisType: typeof AnalysisType = AnalysisType;
    JobType: typeof JobType = JobType;
    JobStatus: typeof JobStatus = JobStatus;
    
    constructor() { }

    ngOnInit() { }
}