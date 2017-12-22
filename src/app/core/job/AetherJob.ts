import { JobState } from "./job"

export class AetherJob
{
    constructor(
        public id?: number,
        public hostId?: number,
        public resultId?: number,
        public aetherExperimentId?: string,
        public cosmosJobUrl?: string,
        public completePercent?: string,
        // JobState
        public state?: JobState,
        public cloudPriority?: number,
        public virtualCluster?: string,
        public relativeTriageAnalysisOutputFolder?: string,
    
        public submitBy?: string,
        public cancelBy?: string,
    
        // run time info
        public numAttempts?: number,
        public submitTime?: string,
        public startTime?: string,
        public endTime?: string,
        public queuedTime?: string,
        public runningTime?: string,
    
        public Logs?: string,
        public Errors?: string
    )
    {
        this.id = -1;
        this.hostId = -1;
        this.resultId = -1;
        this.state = JobState.Waiting;
    }
}