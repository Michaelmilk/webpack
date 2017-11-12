import { Component, OnInit } from '@angular/core';

import { EntitySpaceView } from '../../core/triage/entitySpaceView';
import{ BaseComponent } from '../common/base.component'

@Component({
    selector: 'triage',
    templateUrl: './triage.component.html',
    styleUrls: ['./triage.component.css']
})

export class TriageComponent extends BaseComponent implements OnInit {
    customerIdEnvironment: string;
    entitySpaceViewKey: string;
    entitySpaceView: EntitySpaceView;

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
            let pos = this.entitySpaceViewKey.indexOf("_");
            let entitySpaceName: string = this.entitySpaceViewKey.substr(0, pos);
            let entityViewName: string = this.entitySpaceViewKey.substr(pos + 1);
            this.entitySpaceView = new EntitySpaceView(this.entitySpaceViewKey, customerId, customerEnv, entityViewName, entitySpaceName);
        }
        console.log(this.entitySpaceView);
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