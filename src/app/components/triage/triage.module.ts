import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//ngModel
import {HttpClientModule} from '@angular/common/http';


//routes
import { TriageRoutingModule } from './triage-routing.module';

//component
import { TriageComponent } from './triage.component';
import { JobPanelComponent } from '../../directives/jobPanel/jobPanel.component'

//service
import { TriageService } from './triage.service';

//plugin
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'
import { TriageAnalysisComponent } from './triageAnalysis/triageAnalysis.component';

import { SafePipe } from "../../pipe/safeUrlPipe";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TriageRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    SafePipe,
    TriageComponent,
    TriageAnalysisComponent,
    JobPanelComponent
  ],
  providers: [
    TriageService
  ]
})

export class TriageModule { }
