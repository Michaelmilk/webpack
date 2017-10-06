import {AnalysisType} from './enums'

export class experimentDto{
    constructor(
        public Id: number,
        public Name: string,
        public Type: AnalysisType,
        public CreatedBy: string,
        public UpdatedBy: string,
        public EntitySpaceName?: string,
        public EntitySpaceUrl?: string,
        public EntityViewName?: string,
        public EntityViewUrl?: string,
        public CustomerId?: string,
        public CustomerEnv?: string,
      ) {  }
}