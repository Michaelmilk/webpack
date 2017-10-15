import { EntityAnalysis } from "./entityAnalysis"

export class EntityViewAnalysis extends EntityAnalysis{
    constructor(
        public id: number,
        public name: string,
        public createdBy: string,
        public createdTime: string,
        public updatedBy: string,
        public updatedTime: string,
        public customerId: string,
        public customerEnv: string,
        public entityViewName: string,
        public entityViewVersion: string,
    )
    {
        super(id, name, createdBy, createdTime, updatedBy, updatedTime, customerId, customerEnv);
    }
}