
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

export class TriageAnalysis{
    constructor(
        public churned:
        //public entityView: EntityView,
        //public functoids: string[]
    ){}
}