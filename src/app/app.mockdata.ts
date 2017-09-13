import { experimentDto } from "./core/experimentDto"
import { AnalysisType } from "./core/enums"

export let experimentDtos: experimentDto[] = [
    {
        Id : 1,
        Name: "entitySpace1",
        Type: AnalysisType.EntitySpace,
        CreatedBy: "jixge" ,
        UpdatedBy: "jixge" ,
        EntitySpaceName: "xingfeed",
        EntitySpaceUrl: "",
        EntityViewName: "xingFeedview",
        EntityViewUrl: "",
        CustomerId: "Satori",
        CustomerEnv: "Sources"
    },
    {
        Id : 2,
        Name: "entityView",
        Type: AnalysisType.EntityView,
        CreatedBy: "jixge" ,
        UpdatedBy: "jixge" ,
        EntitySpaceName: "xingfeed",
        EntitySpaceUrl: "",
        EntityViewName: "xingFeedview",
        EntityViewUrl: "",
        CustomerId: "Satori",
        CustomerEnv: "Sources"
    },
    {
        Id : 3,
        Name: "entityGraph",
        Type: AnalysisType.EntitySpace,
        CreatedBy: "jixge" ,
        UpdatedBy: "jixge" ,
        EntitySpaceName: "xingfeed",
        EntitySpaceUrl: "",
        EntityViewName: "xingFeedview",
        EntityViewUrl: "",
        CustomerId: "Satori",
        CustomerEnv: "Sources"
    }
]