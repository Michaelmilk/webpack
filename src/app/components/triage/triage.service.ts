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
import "rxjs/add/operator/toPromise";

import { EntityView } from "../../core/common/entityView";
import { BaseService } from "../common/base.service";
import { ApiController, RequestAction } from "../../core/enums";
//import { HttpClient } from '@angular/common/http/src/client';

// import {ExperimentDto} from "../../../core/experimentDto"
// import { EntitySpaceAnalysis } from '../../../core/entityAnalysis/entitySpaceAnalysis'

@Injectable()
export class TriageService extends BaseService {
	private headers = new Headers({ "Content-Type": "application/json" });
	private triageServiceUrl = `${this.serverUrl}/TriageAnalysis`; // URL to web api
	private epServiceUrl = `${this.serverUrl}/EntityPlatform`; // URL to web api

	constructor(private http: HttpClient) {
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
		return this.http.get<EntityView>(`${this.triageServiceUrl}/entityView`, {
            params: httpParams,
            //headers: new HttpHeaders().set('responseType', 'blob'),
		}); //.map((response) => response.json());
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
		return this.http.get(
			`${this.epServiceUrl}/functoid`,
            { 
                observe: 'response',
                params: httpParams,
                responseType: 'arraybuffer'
                //responseType: 'blob'
                //headers: new HttpHeaders().set('Content-Type', 'undefined')
            }
		);
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
		return this.http.get(
			`${this.epServiceUrl}/mappingFile`,
            { 
                observe: 'response',
                params: httpParams,
                responseType: 'text'
                //responseType: 'blob'
                //headers: new HttpHeaders().set('Content-Type', 'undefined')
            }
		);
	}

	private handleError(error: any): Promise<any> {
		console.error("An error occurred", error); // for demo purposes only
		return Promise.reject(error.message || error);
	}
}
