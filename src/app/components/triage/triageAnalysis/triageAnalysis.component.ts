import { Component, OnInit } from "@angular/core";
import {
	HttpClient,
	HttpEvent,
	HttpInterceptor,
	HttpHandler,
	HttpRequest,
    HttpParams,
    HttpHeaders,
    HttpResponse
} from "@angular/common/http";
import { saveAs } from 'file-saver';


import { EntityView } from "../../../core/common/entityView";
import { EntityViewVersion } from "../../../core/common/entityView";
import { BaseComponent } from "../../common/base.component";
import { TriageService } from "../triage.service";
import { EntityAnalysis } from "../../../core/entityAnalysis/entityAnalysis";
import { Response } from "@angular/http/src/static_response";

@Component({
	selector: "triage",
	templateUrl: "./triageAnalysis.component.html",
	styleUrls: ["./triageAnalysis.component.css"]
})
export class TriageAnalysisComponent extends BaseComponent implements OnInit {
	customerIdEnvironment: string; // = "WrapStar-Prod";
	entityViewKey: string; // = "WrapStar-Full_WrapStar_Redfin";
	entityView: EntityView;
	customerId: string;
	customerEnv: string;
	side2Type: string; // = "Triage";
	currentSide1: EntityViewVersion;
	currentSide2: EntityViewVersion;
	isFetchingEntityView: boolean;
	side1VersionNums: string[];
	side2VersionNums: string[];

	constructor(private triageService: TriageService) {
		super();
	}

	ngOnInit() {
		this.isFetchingEntityView = false;
		this.side2Type = "Triage";
		this.customerIdEnvironment = "WrapStar-Prod";
		this.entityViewKey = "WrapStar-Full_WrapStar_Redfin";
		this.currentSide1 = new EntityViewVersion();
		this.currentSide2 = new EntityViewVersion();
		console.log(this.currentSide1);
		console.log(this.currentSide2);
		this.entityView = new EntityView();
	}

	loadEntitySpaceView() {
		this.isFetchingEntityView = true;
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
			this.entityView = new EntityView(
				this.entityViewKey,
				this.customerId,
				this.customerEnv,
				entityViewName,
				entitySpaceName
			);
		}
		console.log(this.entityView);
	}

	getEntityView() {
		this.entityView = new EntityView();
		this.triageService
			.getEntityView(this.customerId, this.customerEnv, this.entityViewKey)
			.subscribe(entityView => {
				this.entityView = entityView;
				if (entityView.standardVersions.length > 0) {
					this.currentSide1 = entityView.standardVersions[0];
					this.side1VersionNums = entityView.standardVersions.map(
						t => t.version
					);
				}

				this.setSide2VersionNum(1);
				this.isFetchingEntityView = false;

				console.log(entityView);
				console.log("side1", this.currentSide1);
				console.log("side2", this.currentSide2);
			});
	}

	setSide2VersionNum(event: any) {
		console.log(event);
		this.currentSide2 = new EntityView();
		if (this.side2Type == "Triage") {
			this.side2VersionNums = this.entityView.triagedVersions.map(
				t => t.version
			);
			let len = this.side2VersionNums.length;

			if (len > 0) {
				this.currentSide2 = this.entityView.triagedVersions[len - 1];
			}
		} else {
			this.side2VersionNums = this.side1VersionNums;
			let len = this.side2VersionNums.length;

			if (len > 0) {
				this.currentSide2 = this.entityView.standardVersions[len - 1];
			}
		}
	}

	setSide1ViewVersion(version: string) {
		this.currentSide1 = this.entityView.standardVersions.find(
			t => t.version == version
		);
	}

	setSide2ViewVersion(version: string) {
		if (this.side2Type == "Triage") {
			this.currentSide2 = this.entityView.triagedVersions.find(
				t => t.version == version
			);
		} else {
			this.currentSide2 = this.entityView.standardVersions.find(
				t => t.version == version
			);
		}
	}

	downloadFunctoid(dotSplitedVersionNum: string, functoidName: string) {
		this.triageService
			.getFunctoid(
				this.customerId,
				this.customerEnv,
                this.entityViewKey,
                dotSplitedVersionNum,
				functoidName
			)
			.subscribe((response: any) => {
                //this.downloadFile(functoid);
                // var blob = new Blob([response._body], { type: 'application/octet-binary' });
                // //var blob = new Blob([data], { type: 'text/csv' });
                // var url= window.URL.createObjectURL(blob);
                // window.open(url);
        
                console.log("response", response);
                const contentDispositionHeader: string = response.headers.get('Content-Disposition');
                console.log('contentDispositionHeader', contentDispositionHeader);
                // const parts: string[] = contentDispositionHeader.split(';');
                // const filename = parts[1].split('=')[1];
                const blob = new Blob([response.body], { type: 'application/octet-binary,charset=utf-8' });
                saveAs(blob, "filename.dll"); 
            });
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
