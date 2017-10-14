import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ExperimentDto } from "../../../core/experimentDto"
import { experimentDtos } from '../analysisDashboard.mockdata'
import { AnalysisType } from '../../../core/enums'

import { EntitySpaceAnalysisService } from '../service/entitySpaceAnalysis.service'

@Component({
    selector: 'analysis-dashboard',
    templateUrl: './analysisDashboard.component.html',
    //styleUrls: ['./name.component.css']
})

export class AnalysisDashboardComponent implements OnInit {
    experimentDtos: Array<ExperimentDto>;
    AnalysisType: typeof AnalysisType = AnalysisType;
    selectedExperiment: ExperimentDto;

    constructor(
        private router: Router,
        private entitySpaceAnalysisService: EntitySpaceAnalysisService
    ) { }

    ngOnInit() { 
        //console.log(experimentDtos);
        this.experimentDtos = experimentDtos;        
    }

    gotoEntityAnalysisDetail(){
        this.router.navigate(['/detail', this.selectedExperiment.id]);
    }

    test(){
        //console.log(experimentDtos);
    }
}