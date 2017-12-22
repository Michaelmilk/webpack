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
import { JobType, JobState } from '../../core/job/job'

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseComponent implements OnInit {
    AnalysisType: typeof AnalysisType = AnalysisType;
    JobType: typeof JobType = JobType;
    JobState: typeof JobState = JobState;
    
    constructor() { }

    ngOnInit() { }
}