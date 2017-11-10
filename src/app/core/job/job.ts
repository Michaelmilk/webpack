import { JobType } from './jobType'
import { JobStatus} from './jobStatus'

export class Job{
    constructor(
        public id: number,
        public type: JobType,
        public status: JobStatus,
        public submitTime?: string,
        public startTime?: string,
        public endTime?: string,
        public queueTime?: string,
        public runningTime?: string,
        public url?: string,
        public aetherId?: string,
        public completePercent?: string
    ){}
}