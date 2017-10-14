import {AnalysisBase} from "./analysisBase"

export class EntityViewAnalysis extends AnalysisBase{
    constructor(
        public id: number,
        public name: string,
        public createdBy: string,
        public createdTime: string,
        public updatedBy: string,
        public updatedTime: string,
    )
    {
        super(id, name, createdBy, createdTime, updatedBy, updatedTime);
    }
}