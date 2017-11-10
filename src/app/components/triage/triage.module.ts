import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//ngModel
import { HttpModule } from '@angular/http';
//routes
import { TriageRoutingModule } from './triage-routing.module';

//component
import { TriageComponent } from './triage.component';
import { JobPanelComponent } from '../common/jobPanel/jobPanel.component'

//plugin
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TriageRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    TriageComponent,
    JobPanelComponent
  ],
  providers: [
    
  ]
})

export class TriageModule { }
