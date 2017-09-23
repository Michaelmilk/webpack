import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'graph-analysis',
    templateUrl: './graphAnalysis.component.html',
    //styleUrls: ['./name.component.css']
})
export class GraphAnalysisComponent implements OnInit {
    constructor() { 
        console.log("graph analysis");        
    }

    ngOnInit() { }
}