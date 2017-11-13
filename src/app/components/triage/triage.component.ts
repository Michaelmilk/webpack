import { Component, OnInit } from '@angular/core';

import { EntityView } from '../../core/triage/entitySpaceView';
import{ BaseComponent } from '../common/base.component'

@Component({
    selector: 'triage',
    templateUrl: './triage.component.html',
    styleUrls: ['./triage.component.css']
})

export class TriageComponent extends BaseComponent implements OnInit {
    customerIdEnvironment: string;
    entityViewKey: string;
    entityView: EntityView;

    constructor() {
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
        console.log("Submit triage job");
    }

    getTriageJobState() {
        console.log("Get triage job state");
    }

    cancelTriageJob() {
        console.log("Cancel triage job");
    }
}