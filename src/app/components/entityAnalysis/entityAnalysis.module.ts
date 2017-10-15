import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//ngModel

//routes
import { EntityAnalysisRoutingModule } from './entityAnalysis-routing.module';

//plugin
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'

import { AnalysisNavComponent }  from './analysisNav.component';
import { AnalysisDashboardComponent } from './dashboard/analysisDashboard.component'
import { EntityAnalysisComponent } from './entityAnalysis.component'
// import { EntitySpaceAnalysisComponent } from './entitySpace/entitySpaceAnalysis.component';
import { PayloadExplorerComponent } from './entitySpace/payloadExplorer.component';
import { PayloadStatisticComponent } from './entitySpace/payloadStatistic.component';
import { PayloadFilterComponent } from './entitySpace/payloadFilter.component';
import { EntityViewAnalysisComponent }  from './entityView/entityViewAnalysis.component';
import { EntityGraphAnalysisComponent }  from './entityGraph/entityGraphAnalysis.component';


@NgModule({
  imports: [
    BrowserModule,
    EntityAnalysisRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AnalysisDashboardComponent,
    EntityAnalysisComponent,
    AnalysisNavComponent,
    //EntitySpaceAnalysisComponent,
    EntityViewAnalysisComponent,
    EntityGraphAnalysisComponent,
    PayloadExplorerComponent,
    PayloadStatisticComponent,
    PayloadFilterComponent
  ]
})

export class EntityAnalysisModule { }
