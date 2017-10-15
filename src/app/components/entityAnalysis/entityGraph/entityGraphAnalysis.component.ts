import { Component, OnInit } from '@angular/core';
import { EntitySpaceAnalysis } from '../../../core/entityAnalysis/entitySpaceAnalysis'

@Component({
    selector: 'graph-analysis',
    templateUrl: './entityGraphAnalysis.component.html',
    //styleUrls: ['./name.component.css']
})
export class EntityGraphAnalysisComponent implements OnInit {
    constructor() { 
        console.log("graph analysis");        
    }

    ngOnInit() { }
}