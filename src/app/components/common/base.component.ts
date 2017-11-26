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
import 'rxjs/Rx'

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

    downloadFile(data: any){
        //console.log('data', data);
        // var fileName = header('Content-Disposition');
        // var blob = new Blob([response], { type: 'application/octet-binary' });
        // var e = document.createEvent('MouseEvents');
        // var a: HTMLAnchorElement = document.createElement('a');
        // a.setAttribute("download", fileName);
        // a.href = window.URL.createObjectURL(blob);
        // e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // a.dispatchEvent(e);

        var blob = new Blob([data], { type: 'application/octet-binary' });
        //var blob = new Blob([data], { type: 'text/csv' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);

        // let parsedResponse = data.text();
        // let blob = new Blob([parsedResponse], { type: 'text/csv' });
        // let url = window.URL.createObjectURL(blob);
    
        // if(navigator.msSaveOrOpenBlob) {
        //     navigator.msSaveBlob(blob, 'Book.csv');
        // } else {
        //     let a = document.createElement('a');
        //     a.href = url;
        //     a.download = 'Book.csv';
        //     document.body.appendChild(a);
        //     a.click();        
        //     document.body.removeChild(a);
        // }
        // window.URL.revokeObjectURL(url);
    }
}