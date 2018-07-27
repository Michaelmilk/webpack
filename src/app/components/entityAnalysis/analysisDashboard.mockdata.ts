import { ExperimentDto } from "../../core/experimentDto"
import { AnalysisType } from "../../core/enums"

export let experimentDtos: ExperimentDto[] = [
    new ExperimentDto(
        1,
        "entitySpace1",
        AnalysisType.EntitySpace,
        "kk" ,
        "kk" ,
        "xingfeed",
        "",
        "xingFeedview",
        "",
        "Satori",
        "Sources"
    ),
    new ExperimentDto(
        2,
        "entityView",
        AnalysisType.EntitySpace,
        "kk" ,
        "kk" ,
        "xingfeed",
        "",
        "xingFeedview",
        "",
        "Satori",
        "Sources"
    ),
    new ExperimentDto(
        3,
        "graph",
        AnalysisType.EntityGraph,
        "kk" ,
        "kk" ,
        "xingfeed",
        "",
        "xingFeedview",
        "",
        "Satori",
        "Sources"
    ),
]
