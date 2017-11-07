import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'triage',
    templateUrl: './triage.component.html',
    styleUrls: ['./triage.component.css']
})

export class TriageComponent implements OnInit {
    customerEnvironment: string;
    entitySpaceViewName: string;

    constructor() { }

    ngOnInit() { }
}