import { Component, OnInit } from '@angular/core';

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