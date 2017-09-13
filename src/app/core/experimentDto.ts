import {AnalysisType} from './enums'

export class experimentDto{
    Id: number;
    Name: string;
    Type: AnalysisType;
    CreatedBy: string;
    UpdatedBy: string;
    EntitySpaceName?: string;
    EntitySpaceUrl?: string;
    EntityViewName?: string;
    EntityViewUrl?: string;
    CustomerId?: string;
    CustomerEnv?: string;
}