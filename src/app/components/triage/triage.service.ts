import { Injectable } from "@angular/core";
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
//import "rxjs/add/operator/toPromise";

import { EntityView } from "../../core/common/entityView";
import { BaseService } from "../common/base.service";
import { ApiController, RequestAction } from "../../core/enums";
import { TriageAnalysisDto } from "../../core/triage/triageAnalysis";
import { TriageAnalysis } from "../../core/triage/triageAnalysis";
//import { HttpClient } from '@angular/common/http/src/client';

// import {ExperimentDto} from "../../../core/experimentDto"
// import { EntitySpaceAnalysis } from '../../../core/entityAnalysis/entitySpaceAnalysis'

@Injectable()
export class TriageService extends BaseService {
	private headers = new Headers({ "Content-Type": "application/json" });
	private triageServiceUrl = `${this.serverUrl}/TriageAnalysis`; // URL to web api
	private epServiceUrl = `${this.serverUrl}/EntityPlatform`; // URL to web api

	constructor(private httpClient: HttpClient) {
		super();
	}

	getEntityView(customerId: string, customerEnv: string, viewKey: string) {
		//return this.http.get(this.getRequestApi(ApiController.TriageAnalysis, RequestAction.AllCustomerIds)).map((response) => response.json());

		//https://blog.angular-university.io/angular-http/
		const httpParams = new HttpParams()
			.set("customerId", customerId)
			.set("customerEnv", customerEnv)
			.set("viewKey", viewKey);
		//const httpParams = new HttpParams().append('customerId', customerId).append('customerEnv', customerEnv).append('viewKey', viewKey);
		console.log(httpParams.toString());
		return this.httpClient.get<TriageAnalysis>(
			`${this.triageServiceUrl}/triageAnalysis`,
			{
				params: httpParams
				//headers: new HttpHeaders().set('responseType', 'blob'),
			}
		); //.map((response) => response.json());
	}

	getFunctoid(
		customerId: string,
		customerEnv: string,
		viewKey: string,
		dotSplitedVersionNum: string,
		functoidName: string
	) {
		const httpParams = new HttpParams()
			.set("customerId", customerId)
			.set("customerEnv", customerEnv)
			.set("viewKey", viewKey)
			.set("dotSplitedVersionNum", dotSplitedVersionNum)
			.set("functoidName", functoidName);
		return this.httpClient.get(`${this.epServiceUrl}/functoid`, {
			observe: "response",
			params: httpParams,
			responseType: "arraybuffer"
			//responseType: 'blob'
			//headers: new HttpHeaders().set('Content-Type', 'undefined')
		});
	}

	getMappingFile(
		customerId: string,
		customerEnv: string,
		viewKey: string,
		dotSplitedVersionNum: string,
		functoidName: string
	) {
		const httpParams = new HttpParams()
			.set("customerId", customerId)
			.set("customerEnv", customerEnv)
			.set("viewKey", viewKey)
			.set("dotSplitedVersionNum", dotSplitedVersionNum)
			.set("mappingFileName", functoidName);
		return this.httpClient.get(`${this.epServiceUrl}/mappingFile`, {
			observe: "response",
			params: httpParams,
			responseType: "text"
			//responseType: 'blob'
			//headers: new HttpHeaders().set('Content-Type', 'undefined')
		});
	}

	submitTriageAnalysisJob(
		vc: string,
		cloudPriority: number,
		triageAnalysisDto: TriageAnalysisDto
	) {
		return this.httpClient.post(
			`${this.triageServiceUrl}/triageAnalsisJob`,
			{
				cloudPriority: cloudPriority,
				vc: vc,
				triageAnalysisDto: triageAnalysisDto
			},
			{ headers: new HttpHeaders().set("User", "jixge") }
		);
	}

	getTriageResultByChurnType(resultId: number, churnType: string) {
		const httpParams = new HttpParams()
			.set("resultId", resultId.toString())
			.set("churnType", churnType);
		return this.httpClient.get(
			`${this.triageServiceUrl}/triageResultByChurnType`,
			{ params: httpParams }
		);
	}

	getTriageAnalysisJob(jobId: number) {
		const httpParams = new HttpParams()
			.set("jobId", jobId.toString());
		return this.httpClient.get(
			`${this.triageServiceUrl}/triageAnalsisJob`,
			{ params: httpParams }
		);
	}

	private handleError(error: any): Promise<any> {
		console.error("An error occurred", error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
