import { Component, OnInit } from '@angular/core';

import { EntityView } from '../../../core/common/entityView';
import{ BaseComponent } from '../../common/base.component'
import { TriageService } from '../triage.service';

@Component({
    selector: 'triage',
    templateUrl: './triageAnalysis.component.html',
    styleUrls: ['./triageAnalysis.component.css']
})

export class TriageAnalysisComponent extends BaseComponent implements OnInit {
    customerIdEnvironment: string = "WrapStar-Prod";
    entityViewKey: string = "WrapStar-Full_WrapStar_Redfin";
    entityView: EntityView;
    customerId: string;
    customerEnv: string;
    analysisType: string = "Triage";

    constructor(private triageService: TriageService) {
        super();
    }

    ngOnInit() { }

    loadEntitySpaceView() {
        this.parseEntitySpaceViewmeta();
        this.getEntityView();
    }

    parseEntitySpaceViewmeta() {
        let params = this.customerIdEnvironment.split("-");
        if (params.length >= 2) {
            this.customerId = params[0];
            this.customerEnv = params[1];
            let pos = this.entityViewKey.indexOf("_");
            let entitySpaceName: string = this.entityViewKey.substr(0, pos);
            let entityViewName: string = this.entityViewKey.substr(pos + 1);
            this.entityView = new EntityView(this.entityViewKey, this.customerId, this.customerEnv, entityViewName, entitySpaceName);
        }
        console.log(this.entityView);
    }

    getEntityView() {
        this.triageService.getEntityView(this.customerId, this.customerEnv, this.entityViewKey).subscribe((entityView) => {
            this.entityView = entityView;
            console.log(entityView);
        });
    }

    submitTriageJob() {
        console.log("Submit triage job");
    }

    switchViewVersion()
    {

    }

    getTriageJobState() {
        console.log("Get triage job state");
    }

    cancelTriageJob() {
        console.log("Cancel triage job");
    }
}