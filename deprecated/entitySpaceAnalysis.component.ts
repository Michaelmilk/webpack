import { Component, OnInit } from '@angular/core';

import {AnalysisType} from '../../../core/enums'

@Component({
    selector: 'space-analysis',
    templateUrl: './entitySpaceAnalysis.component.html',
    //styleUrls: ['./name.component.css']
})
export class EntitySpaceAnalysisComponent implements OnInit {
    analysisType: AnalysisType = AnalysisType.EntitySpace;

    constructor() {
        console.log("entity space analysis");
     }

    ngOnInit() { }
}