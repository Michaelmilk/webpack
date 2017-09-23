import { Component, OnInit, Input } from '@angular/core';

import {AnalysisType} from '../../core/enums'

@Component({
    selector: 'analysis-nav',
    templateUrl: './analysisNav.component.html',
    styleUrls: ['./analysisNav.component.css']
})
export class AnalysisNavComponent implements OnInit {
    @Input()
    analysisType: AnalysisType
    constructor() { }

    ngOnInit() { 
        console.log(this.analysisType);
    }
}