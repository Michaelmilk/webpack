import { EntityAnalysis } from "./entityAnalysis";

export class GraphAnalysis extends EntityAnalysis{
    constructor(
        public id: number,
        public name: string,
        public createdBy: string,
        public createdTime: string,
        public updatedBy: string,
        public updatedTime: string,
        public customerId: string,
        public customerEnv: string
    )
    {
        super(id, name, createdBy, createdTime, updatedBy, updatedTime, customerId, customerEnv);
    }
}