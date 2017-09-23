import { Component, OnInit } from '@angular/core';

import {experimentDto} from "../../core/experimentDto"
import { experimentDtos } from '../../app.mockdata'
import { AnalysisType } from '../../core/enums'

@Component({
    selector: 'selector',
    templateUrl: './dashboard.component.html',
    //styleUrls: ['./name.component.css']
})
export class DashboardComponent implements OnInit {
    experimentDtos: Array<experimentDto>;
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