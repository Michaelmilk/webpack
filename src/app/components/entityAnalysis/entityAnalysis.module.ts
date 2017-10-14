import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';//ngModel

//routes
import { AppRoutingModule } from './entityAnalysis-routing.module';

//plugin
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'


import { AnalysisDashboardComponent } from './dashboard/analysisDashboard.component'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AnalysisDashboardComponent
  ]
})

export class EntityAnalysisModule { }
