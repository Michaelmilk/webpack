import { Constants } from '../../core/common/constants'


export class MappingFile{
    constructor(
        public name:string,
        public version: string//dot splited
    ){}
}

export class MappingSetting{
    constructor(
        public mappingFiles: MappingFile[],
        public functoids: string[]
    ){}
}

export class EntityViewVersion{
    // public _viewStreamPath: string;
    // public _entitySpaceStreamPath: string;

    constructor(
        public state: string,
        public virtualCluster: string,
        public vCRelativeFolder: string,
        public mappingSetting: MappingSetting,
        public lastUpdatedTime: string,        
    ){}
    
    get viewStreamPath(): string{
        if (!this.virtualCluster || !this.vCRelativeFolder){
            return "";
        }

        return `${this.virtualCluster}${this.vCRelativeFolder}${Constants.streamView}`;
    }
    
    get entitySpaceStreamPath(): string{
        if (!this.virtualCluster || !this.vCRelativeFolder){
            return "";
        }

        let len = this.vCRelativeFolder.length;
        let entitySpaceFolderslashPos = this.vCRelativeFolder.substr(0, len - 1).lastIndexOf("/");
        let entitySpaceRelativeFolder = this.vCRelativeFolder.substr(0, entitySpaceFolderslashPos + 1);
        return `${this.virtualCluster}${entitySpaceRelativeFolder}${Constants.streamEntitySpace}`;
    }
}

export class EntityView{
    constructor(
        public viewKey: string,
        public customerId: string,
        public customerEnv: string,
        public name: string,
        public entitySpaceName: string,
        public model?: string,
        public state?: string,
        public createdBy?: string,
        public createdTime?: string,
        public updatedBy?: string,
        public updatedTime?: string,
        public entitySpaceViewVersion?: EntityViewVersion,
        public entitySpaceUrl?: string,
        public entitySpaceStreamPath?: string,
        public entitySpaceDebugStreamFolder?: string,
        public entityViewName?: string,
        public entityViewUrl?: string,
        public entityViewStreamPath?: string
      ) {  }
}