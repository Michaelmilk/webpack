
import { EntityView } from "../common/entityView"
import {TriageType } from "../enums"

export class Triple{
    constructor(
        public subject: string,
        public property: string,
        public value: string
    ){}
}

export class TriageDelete{
    constructor(
        public triageType: TriageType,
        public entityDelete: string[],
        public propertyDelete: string[],
        public valueDelete: string[]
    ){}
}

export class TriageChurn{
    constructor(
        public triageType: TriageType,
         
    ){}
}


export class TriageAdd{
    constructor(
        public triageType: TriageType,
         
    ){}
}

export class TriageProperty{
    constructor(
        public property: string,
        public standardValues: string[],
        public triageValues: string[]
    ){}
}

export class TriageComparison{
    constructor(
        public subject: string,
        public properties: TriageProperty[]){
    }
}

export class TriageDiff{
    constructor(
        public triageType: TriageType,
        public entity: TriageComparison,
        public property: TriageComparison,
        public value: TriageComparison
    ){}
}

export class TriageAnalysis{
    constructor(
        public stardardVersion: string,
        public triageVersion: string,
        public deleted: TriageDiff,       
        public churned: TriageDiff,
        public added: TriageDiff
    ){}
}