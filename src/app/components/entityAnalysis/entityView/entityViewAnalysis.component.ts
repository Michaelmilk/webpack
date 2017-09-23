import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'view-analysis',
    templateUrl: './entityViewAnalysis.component.html',
    //styleUrls: ['./name.component.css']
})
export class EntityViewAnalysisComponent implements OnInit {
    constructor() { 
        console.log("entity view analysis");        
    }

    ngOnInit() { }
}