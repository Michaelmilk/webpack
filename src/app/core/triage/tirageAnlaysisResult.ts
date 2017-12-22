
export class PropertyValue
{
    constructor(
        public value?: string,
        public contexts?: Array<string>
    )
    {
        //this.contexts = new Array<string>();
    }
}

export class EntityComparison
{
    constructor(
        public subject?: string,
        public propertyValueComparisons?: Array<PropertyValueComparison>
    )
    {
        //this.subjectValueComparisons = new Array<EntityValueComparison>();
    }
}

export class PropertyValueComparison
{
    constructor(
        public property?: string,
        public isFirst?: boolean,
        public standardValues?: Array<PropertyValue>,
        public triagedValues?: Array<PropertyValue>
    )
    {
        // this.standardValues = new Array<PropertyValue>();
        // this.triagedValues = new Array<PropertyValue>();
    }
}


export class PropertyComparison
{
    constructor(
        public property?: string,
        public subjectValueComparisons?: Array<SubjectValueComparison>
    )
    {
        //this.subjectValueComparisons = new Array<EntityValueComparison>();
    }
}

export class SubjectValueComparison
{
    constructor(
        public subject?: string,
        public isFirst?: boolean,
        public standardValues?: Array<PropertyValue>,
        public triagedValues?: Array<PropertyValue>
    )
    {
        // this.standardValues = new Array<PropertyValue>();
        // this.triagedValues = new Array<PropertyValue>();
    }
}

export class ValueComparison
{
    constructor(
        public subject?: string,
        public property?: boolean,
        public standardValues?: Array<PropertyValue>,
        public triagedValues?: Array<PropertyValue>
    )
    {
        // this.standardValues = new Array<PropertyValue>();
        // this.triagedValues = new Array<PropertyValue>();
    }
}


export class TriageLayer
{
    constructor(
        public entity?: Array<EntityComparison>,
        public property?: Array<PropertyComparison>,
        public value?: Array<ValueComparison>,
    )
    {
        this.entity = new Array<EntityComparison>();
        this.property = new Array<PropertyComparison>();
        this.value = new Array<ValueComparison>();
    }
}

export class TriageChurn
{
    constructor(
        public deleted?: TriageLayer,
        public churned?: TriageLayer,
        public added?: TriageLayer,
    )
    {
        this.deleted = new TriageLayer();
        this.churned = new TriageLayer();
        this.added = new TriageLayer();
    }
}

export class TriageAnalysisResult
{
    constructor(
        public triageAnalysisId?: number,
        public valueChurn?: TriageChurn,
        public pipelineTopEntitiesChurn?: TriageChurn,
        public pipelineTypeChurn?: TriageChurn,
        public pipelineChurn?: TriageChurn,
        public pipelineUpdatedEntitesChurn?: TriageChurn,
    )
    {
        // this.valueChurn = new TriageChurn();
        // this.pipelineTopEntitiesChurn = new TriageChurn();
        // this.pipelineTypeChurn = new TriageChurn();
        // this.pipelineChurn = new TriageChurn();
        // this.pipelineUpdatedEntitesChurn = new TriageChurn();
    }
}