export enum AnalysisType {
    EntitySpace = 1,
    EntityView,
    EntityGraph
};

export enum ApiController{
    EntityPlatform = 1,
    TriageAnalysis,
    EntitySpace,
    EntityView,
    EntityGraph
}

export enum RequestAction{
    AllCustomerIds = 1
}


export enum TriageType{
    EveryVersion,
    Standard,
    Triaged
}