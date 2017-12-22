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
import { saveAs } from "file-saver";
import { Observable } from "rxjs/Rx";

import {
	EntityView,
	Functoid,
	EntityViewVersion,
	MappingFile
} from "../../../core/common/entityView";
import { BaseComponent } from "../../common/base.component";
import { TriageService } from "../triage.service";
import { EntityAnalysis } from "../../../core/entityAnalysis/entityAnalysis";
import { AetherJob } from "../../../core/job/AetherJob";
import {
	TriageAnalysisDto,
	TriageAnalysis
} from "../../../core/triage/triageAnalysis";
import {
	EntityComparison,
	PropertyComparison,
	ValueComparison,
	TriageChurn,
	TriageLayer,
	TriageAnalysisResult
} from "../../../core/triage/tirageAnlaysisResult";
import { forEach } from "@angular/router/src/utils/collection";
import { Subscription } from "rxjs/Subscription";
import { JobState, JobPanelState } from "../../../core/job/job";
import { JobPanelComponent } from "../../../directives/jobPanel/jobPanel.component";

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
	entitySpaceName: string;
	entitySpaceViewName: string;
	side2Type: string; // = "Triage";
	triageAnalysis: TriageAnalysis;
	//triageAnalysisId: number;
	currentSide1: EntityViewVersion;
	currentSide2: EntityViewVersion;
	isFetchingEntityView: boolean;
	side1VersionNums: string[];
	side2VersionNums: string[];
	triageDebugStream: string;
	cloudPriority: number;
	virtualCluster: string;
	currentChurn: TriageChurn;
	triageAnalysisResult: TriageAnalysisResult;
	//triageAnalysisAetherJob: AetherJob;
	triageAnalysisAetherJob: AetherJob; //Observable<AetherJob>;
	triageAnalysisResultId: number;
	entityViewerSide1: string;
	entityViewerSide2: string;
	jobPanelState: JobPanelState;

	//regular timer
	timer: Observable<number>;
	timerSubscription: Subscription;

	//function params to directive
	submitTriageJobFunc: Function;
	getTriageJobFunc: Function;
	cancelTriageJobFunc: Function;

	constructor(private triageService: TriageService) {
		super();
	}

	ngOnInit() {
		this.isFetchingEntityView = false;
		this.side2Type = "Triage";
		this.customerIdEnvironment = "WrapStar-Prod";
		this.entityViewKey = "WrapStar-Full_wrapstar_education_redfin";
		this.initializeMembers();

		//regular timer
		this.timer = Observable.timer(0, 30000);

		//function param
		this.submitTriageJobFunc = () => this.submitTriageJob();
		this.getTriageJobFunc = (jobId: number) => this.getTriageAnalysisJob(jobId);
		this.cancelTriageJobFunc = () => this.cancelTriageJob();
	}

	initializeMembers() {
		this.triageDebugStream = "ValueChurnCounter"; //"PipelineTopEntitiesChurnCounter"; //"ValueChurnCounter";
		this.triageAnalysis = new TriageAnalysis();
		this.currentSide1 = new EntityViewVersion();
		this.currentSide2 = new EntityViewVersion();
		this.cloudPriority = 1000;
		this.virtualCluster = "https://cosmos08.osdinfra.net/cosmos/Knowledge/";
		this.entityView = new EntityView();
		this.currentChurn = new TriageChurn();
		this.triageAnalysisResult = new TriageAnalysisResult();
		this.triageAnalysisAetherJob = new AetherJob();
		this.jobPanelState = new JobPanelState();
	}

	loadTriageAnalysis() {
		this.initializeMembers();
		this.isFetchingEntityView = true;
		this.parseEntitySpaceViewmeta();
		this.getTriageAnalysis();
	}

	parseEntitySpaceViewmeta() {
		let params = this.customerIdEnvironment.split("-");
		if (params.length >= 2) {
			this.customerId = params[0];
			this.customerEnv = params[1];
			let pos = this.entityViewKey.indexOf("_");
			this.entitySpaceName = this.entityViewKey.substr(0, pos);
			this.entitySpaceViewName = this.entityViewKey.substr(pos + 1);
			this.entityView = new EntityView(
				this.entityViewKey,
				this.customerId,
				this.customerEnv,
				this.entitySpaceName,
				this.entitySpaceViewName
			);
		}
		console.log(this.entityView);
	}

	getTriageAnalysis() {
		this.entityView = new EntityView();
		this.triageService
			.getEntityView(this.customerId, this.customerEnv, this.entityViewKey)
			.subscribe(
				triageAnalysis => {
					this.entityView = triageAnalysis.entityView;
					if (this.entityView.standardVersions.length > 0) {
						this.currentSide1 = this.entityView.standardVersions[0];
						this.side1VersionNums = this.entityView.standardVersions.map(
							t => t.version
						);
					}

					this.setSide2VersionNum(1);
					this.isFetchingEntityView = false;
					this.triageAnalysis = triageAnalysis;
					this.triageAnalysisResultId = triageAnalysis.resultId;
					console.log(triageAnalysis);
					console.log(this.entityView);
					console.log("side1", this.currentSide1);
					console.log("side2", this.currentSide2);

					this.loadTriageAnalysisJobAndResult(
						triageAnalysis.analysisJobId,
						triageAnalysis.resultId
					);
				},
				err => {
					this.isFetchingEntityView = false;
					console.log("err", err);
				}
			);
	}

	loadTriageAnalysisJobAndResult(jobId: number, resultId: number) {
		if (jobId != -1) {
			this.setJobStateTimer(jobId);
		}

		if (resultId != -1) {
			this.switchChurn();
		}
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
				this.currentSide2 = this.entityView.triagedVersions[0];
			}
		} else {
			this.side2VersionNums = this.side1VersionNums;
			let len = this.side2VersionNums.length;

			if (len > 1) {
				this.currentSide2 = this.entityView.standardVersions[1];
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

	downloadFunctoid(dotSplitedVersionNum: string, functoid: Functoid) {
		functoid.isDownloading = true;
		this.triageService
			.getFunctoid(
				this.customerId,
				this.customerEnv,
				this.entityViewKey,
				dotSplitedVersionNum,
				functoid.name
			)
			.subscribe((response: HttpResponse<any>) => {
				const functoidName: string = response.headers.get("filename");
				const blob = new Blob([response.body], {
					type: "application/octet-binary,charset=utf-8"
				});
				saveAs(blob, functoid.name);
				functoid.isDownloading = false;
			});
	}

	downloadMappingFile(dotSplitedVersionNum: string, mappingFile: MappingFile) {
		mappingFile.isDownloading = true;
		this.triageService
			.getMappingFile(
				this.customerId,
				this.customerEnv,
				this.entityViewKey,
				dotSplitedVersionNum,
				mappingFile.name
			)
			.subscribe((response: HttpResponse<any>) => {
				const mappingFileName: string = response.headers.get("filename");
				const blob = new Blob([response.body], {
					type: "application/xml,charset=utf-8"
				});
				saveAs(blob, `${mappingFileName}@${mappingFile.version}.xml`);
				mappingFile.isDownloading = false;
			});
	}

	submitTriageJob() {
		console.log("Submit triage job");
		let triageAnalysisDto = new TriageAnalysisDto(
			this.customerId,
			this.customerEnv,
			this.entitySpaceName,
			this.entitySpaceViewName,
			this.currentSide2.relativeDebugStreamFolder,
			this.currentSide1.version,
			this.currentSide2.version,
			this.currentSide1.relativeStreamPath,
			this.currentSide2.relativeStreamPath
		);

		console.log("Submit triage job");
		console.log("cloudPriority", this.cloudPriority);
		console.log("virtualCluster", this.virtualCluster);

		this.jobPanelState.isSubmiting = true;

		this.triageService
			.submitTriageAnalysisJob(
				this.virtualCluster,
				this.cloudPriority,
				triageAnalysisDto
			)
			.subscribe((aetherJob: AetherJob) => {
				console.log(aetherJob);
				this.triageAnalysisAetherJob = aetherJob;
				//this.triageAnalysisId = aetherJob.hostId;

				this.jobPanelState.isRunning = true;
				this.jobPanelState.isRunning = true;
				
				console.log(
					"1",
					aetherJob.state == JobState.Waiting ||
						aetherJob.state == JobState.Running
				);
				this.setJobStateTimer(aetherJob.id);
				this.jobPanelState.isSubmiting = false;
		
			});
	}

	setJobStateTimer(jobId: number) {
		if (!this.timerSubscription) {
			console.log("timer");
			this.timerSubscription = this.timer
				.takeWhile(
					() =>
						this.triageAnalysisAetherJob.state === JobState.Waiting ||
						this.triageAnalysisAetherJob.state === JobState.Running
				)
				.subscribe(t => {
					this.getTriageAnalysisJob(jobId);
				});
		}
	}

	getTriageAnalysisJob(jobId: number) {
		this.triageService
			.getTriageAnalysisJob(jobId)
			.subscribe((aetherJob: AetherJob) => {
				console.log(aetherJob);
				this.cloudPriority = aetherJob.cloudPriority;
				this.virtualCluster = aetherJob.virtualCluster;
				this.triageAnalysisAetherJob = aetherJob;
				this.triageAnalysisResultId = aetherJob.resultId;
				switch (aetherJob.state) {
					case JobState.Waiting:
					case JobState.Running: {
						this.jobPanelState.isRunning = true;
						break;
					}
					case JobState.Failed:
					case JobState.Canceled:
					case JobState.TimeOut:
					case JobState.UnKnown:
					case JobState.Succeeded: {
						this.jobPanelState.isRunning = false;
						this.switchChurn();
						break;						
					}
				}
			});
		console.log("Get triage job");
	}

	cancelTriageJob() {
		this.jobPanelState.isCanceling = true;

		console.log("Cancel triage job");

		this.jobPanelState.isCanceling = false;		
	}

	setCollapseTag(churn: TriageChurn) {
		this.setEntityComparisonCollapseTag(churn.deleted.entity);
		this.setEntityComparisonCollapseTag(churn.added.entity);
		this.setPropertyComparisonCollapseTag(churn.deleted.property);
		this.setPropertyComparisonCollapseTag(churn.added.property);
	}

	setEntityComparisonCollapseTag(triageLayer: Array<EntityComparison>) {
		console.log("triageLayer", triageLayer);
		if (triageLayer.length !== 0) {
			triageLayer.forEach(t => {
				//console.log("subjectValueComparisons", t.subjectValueComparisons);
				if (
					t.propertyValueComparisons &&
					t.propertyValueComparisons.length !== 0
				) {
					//console.log(t.property);
					t.propertyValueComparisons[0].isFirst = true;
				}
			});
		}
	}

	setPropertyComparisonCollapseTag(triageLayer: Array<PropertyComparison>) {
		console.log("triageLayerProperty", triageLayer);
		if (triageLayer.length !== 0) {
			triageLayer.forEach(t => {
				//console.log("subjectValueComparisons", t.subjectValueComparisons);
				if (
					t.subjectValueComparisons &&
					t.subjectValueComparisons.length !== 0
				) {
					//console.log(t.property);
					t.subjectValueComparisons[0].isFirst = true;
				}
			});
		}
	}

	getTriageAnalysisResultByChurnType(
		resultId: number,
		triageChurnType: string
	) {
		return this.triageService
			.getTriageResultByChurnType(resultId, triageChurnType)
			.subscribe((response: TriageChurn) => {
				console.log("response", response);
				this.setCollapseTag(response);
				console.log("response1", response);
				
				this.currentChurn = response;
				console.log("switchChurn0", this.currentChurn);
			});
	}

	switchChurn() {
		if (this.triageAnalysisResultId == -1) {
			return;
		}

		switch (this.triageDebugStream) {
			case "ValueChurnCounter": {
				if (!this.triageAnalysisResult.valueChurn) {
					this.getTriageAnalysisResultByChurnType(
						this.triageAnalysisResultId,
						"ValueChurnCounter"
					).add(() => {
						this.triageAnalysisResult.valueChurn = this.currentChurn;
					});
				} else {
					this.currentChurn = this.triageAnalysisResult.valueChurn;
				}
				console.log(this.currentChurn);

				break;
			}
			case "PipelineTopEntitiesChurnCounter": {
				if (!this.triageAnalysisResult.pipelineTopEntitiesChurn) {
					this.getTriageAnalysisResultByChurnType(
						this.triageAnalysisResultId,
						"PipelineTopEntitiesChurnCounter"
					).add(() => {
						this.triageAnalysisResult.pipelineTopEntitiesChurn = this.currentChurn;
					});
				} else {
					this.currentChurn = this.triageAnalysisResult.pipelineTopEntitiesChurn;
				}
				console.log(this.currentChurn);

				break;
			}
			case "PipelineTypeChurnCounter": {
				if (!this.triageAnalysisResult.pipelineTypeChurn) {
					this.getTriageAnalysisResultByChurnType(
						this.triageAnalysisResultId,
						"PipelineTypeChurnCounter"
					).add(() => {
						console.log("switchChurn1", this.currentChurn);
				
						this.triageAnalysisResult.pipelineTypeChurn = this.currentChurn;
					});
				} else {
					this.currentChurn = this.triageAnalysisResult.pipelineTypeChurn;
				}
				console.log("switchChurn2", this.currentChurn);
				break;
			}
			case "PipelineChurnCounter": {
				if (!this.triageAnalysisResult.pipelineChurn) {
					this.getTriageAnalysisResultByChurnType(
						this.triageAnalysisResultId,
						"PipelineChurnCounter"
					).add(() => {
						this.triageAnalysisResult.pipelineChurn = this.currentChurn;
					});
				} else {
					this.currentChurn = this.triageAnalysisResult.pipelineChurn;
				}
				console.log(this.currentChurn);
				break;
			}
			case "PipelineUpdatedEntitiesChurnCounter": {
				if (!this.triageAnalysisResult.pipelineUpdatedEntitesChurn) {
					this.getTriageAnalysisResultByChurnType(
						this.triageAnalysisResultId,
						"PipelineUpdatedEntitiesChurnCounter"
					).add(() => {
						this.triageAnalysisResult.pipelineUpdatedEntitesChurn = this.currentChurn;
					});
				} else {
					this.currentChurn = this.triageAnalysisResult.pipelineUpdatedEntitesChurn;
				}
				console.log(this.currentChurn);
				break;
			}
		}
	}

	generateEntityViewerSBSUrls(subject: string) {
		//this.sanitizer.bypassSecurityTrustResourceUrl
		this.entityViewerSide1 = `http://entity-matching-tool/Home/EntityViewer?mode=1&stream=${this.currentSide1.relativeStreamPath}&eid=${encodeURIComponent(subject)}&vc=https%3A%2F%2Fcosmos08.osdinfra.net%2Fcosmos%2FEntityMatching.Exp`;
		this.entityViewerSide2 = `http://entity-matching-tool/Home/EntityViewer?mode=1&stream=${this.currentSide2.relativeStreamPath}&eid=${encodeURIComponent(subject)}&vc=https%3A%2F%2Fcosmos08.osdinfra.net%2Fcosmos%2FEntityMatching.Exp`;;
	}
}
