import { Component, OnInit } from '@angular/core';

import { EntityView } from '../../core/common/entityView';
import{ BaseComponent } from '../common/base.component'
import { TriageService } from './triage.service';

@Component({
    selector: 'triage',
    templateUrl: './triage.component.html',
    styleUrls: ['./triage.component.css']
})

export class TriageComponent extends BaseComponent implements OnInit {
    customerIdEnvironment: string;
    entityViewKey: string;
    entityView: EntityView;

    constructor(private triageService: TriageService) {
        super();
    }

    ngOnInit() { }

    loadEntitySpaceView() {
        this.parseEntitySpaceViewmeta();
    }

    parseEntitySpaceViewmeta() {
        let params = this.customerIdEnvironment.split("-");
        if (params.length >= 2) {
            let customerId: string = params[0];
            let customerEnv: string = params[1];
            let pos = this.entityViewKey.indexOf("_");
            let entitySpaceName: string = this.entityViewKey.substr(0, pos);
            let entityViewName: string = this.entityViewKey.substr(pos + 1);
            this.entityView = new EntityView(this.entityViewKey, customerId, customerEnv, entityViewName, entitySpaceName);
        }
        console.log(this.entityView);
    }

    submitTriageJob() {
        this.triageService.getEntitySpaceView().subscribe((response) => {
            console.log(response);
            
        });
        console.log("Submit triage job");
    }

    getTriageJobState() {
        console.log("Get triage job state");
    }

    cancelTriageJob() {
        console.log("Cancel triage job");
    }
}