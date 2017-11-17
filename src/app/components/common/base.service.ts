import { Component, OnInit } from '@angular/core';

import { ApiController } from '../../core/enums'
import { RequestAction } from '../../core/enums'

// @Component({
//     selector: 'app-name',
//     templateUrl: './name.component.html',
//     styleUrls: ['./name.component.scss']
// })

export class BaseService implements OnInit {
    serverUrl: string = "http://localhost:9000/api";
    ApiController: typeof ApiController = ApiController;
    constructor() { }

    ngOnInit() { }

    getRequestApi(apiController: ApiController, requestAction: RequestAction, id?: number): string{
        if (id !== undefined){
            return `${this.serverUrl}/${ApiController[apiController]}/${id}/${RequestAction[requestAction]}`;
        }else{
            return `${this.serverUrl}/${ApiController[apiController]}/${RequestAction[requestAction]}`;
        }
    }
}