import { Injectable } from '@angular/core';
import {    HttpClient, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { EntityView } from "../../core/common/entityView";
import { BaseService } from '../common/base.service';
import { ApiController, RequestAction } from '../../core/enums';
//import { HttpClient } from '@angular/common/http/src/client';

// import {ExperimentDto} from "../../../core/experimentDto"
// import { EntitySpaceAnalysis } from '../../../core/entityAnalysis/entitySpaceAnalysis'

@Injectable()
export class TriageService extends BaseService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private entitySpaceViewUrl = 'api/entityspaceanalysis';  // URL to web api

    constructor(private http: HttpClient) {
        super();
     }

     getEntityView(customerId: string, customerEnv: string, viewKey: string){
        //return this.http.get(this.getRequestApi(ApiController.TriageAnalysis, RequestAction.AllCustomerIds)).map((response) => response.json());

        //https://blog.angular-university.io/angular-http/
        //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2); //Create new HttpParams
        const httpParams = new HttpParams().set('customerId', customerId).set('customerEnv', customerEnv).set('viewKey', viewKey);
        //const httpParams = new HttpParams().append('customerId', customerId).append('customerEnv', customerEnv).append('viewKey', viewKey);
        console.log(httpParams.toString());
        return this.http.get<EntityView>("http://localhost:9000/api/TriageAnalysis/entityView", { params: httpParams });//.map((response) => response.json());
    }

    // getEntitySpaceAnalysisDtos(): Promise<ExperimentDto[]> {
    //     return this.http.get(this.heroesUrl)
    //         .toPromise()
    //         .then(response => response.json().data as ExperimentDto[])
    //         .catch(this.handleError);
    // }

    // getEntitySpaceAnalysis(id: number): Promise<EntitySpaceAnalysis> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(response => response.json().data as ExperimentDto)
    //         .catch(this.handleError);
    // }

    // delete(id: number): Promise<void> {
    //     const url = `${this.heroesUrl}/${id}`;
    //     return this.http.delete(url, { headers: this.headers })
    //         .toPromise()
    //         .then(() => null)
    //         .catch(this.handleError);
    // }

    // update(hero: ExperimentDto): Promise<ExperimentDto> {
    //     const url = `${this.heroesUrl}/${hero.id}`;
    //     return this.http
    //         .put(url, JSON.stringify(hero), { headers: this.headers })
    //         .toPromise()
    //         .then(() => hero)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}