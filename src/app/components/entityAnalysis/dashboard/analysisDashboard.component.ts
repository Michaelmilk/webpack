import { Component, OnInit } from '@angular/core';

import {ExperimentDto} from "../../../core/experimentDto"
import { experimentDtos } from '../../../app.mockdata'
import { AnalysisType } from '../../../core/enums'

@Component({
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./name.component.css']
})
export class AnalysisDashboardComponent implements OnInit {
    experimentDtos: Array<ExperimentDto>;
    AnalysisType: typeof AnalysisType = AnalysisType;
    constructor() { }

    ngOnInit() { 
        //console.log(experimentDtos);
        this.experimentDtos = experimentDtos;        
    }

    test(){
        //console.log(experimentDtos);
    }
}