import { EntityAnalysis } from "./entityAnalysis";

export class EntitySpaceAnalysis extends EntityAnalysis{
    constructor(
        public id: number,
        public name: string,
        public createdBy: string,
        public createdTime: string,
        public updatedBy: string,
        public updatedTime: string,
        public customerId: string,
        public customerEnv: string,
        public entitySpaceName: string,
        public entitySpaceVersion: string,
    )
    {
        super(id, name, createdBy, createdTime, updatedBy, updatedTime, customerId, customerEnv);
    }
}