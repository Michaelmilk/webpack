
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
        public id?: number,
        public customerId?: string,
        public customerEnv?: string,
        public entitySpaceName?: string,
        public entitySpaceViewName?: string,
        public stardardVersion?: string,
        public triagedVersion?: string,
        public standardViewRelativeStreamPath?: string,
        public triagedViewRelativeStreamPath?: string,
        public triageAnalysisOutputFolder?: string,
        public entityView?: EntityView,
        public resultId?: number,
        public analysisJobId?: number
    ){}
}



export class TriageAnalysisDto{
    constructor(
        public CustomerId?: string,
        public CustomerEnv?: string,
        public EntitySpaceName?: string,
        public EntitySpaceViewName?: string,
        public DebugFolderRelativePath?: string,
        public StandardVersion?: string,
        public TriageVersion?: string,
        public StandardViewRelativeStreamPath?: string,
        public TriagedViewRelativeStreamPath?: string
    )
    { }
}