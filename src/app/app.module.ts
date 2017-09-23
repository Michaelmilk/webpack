import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';//ngModel

//routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'

//analysis
import { AnalysisNavComponent }  from './components/entityAnalysis/analysisNav.component';
import { EntityAnalysisComponent }  from './components/entityAnalysis/entityAnalysis.component';
import { EntitySpaceAnalysisComponent } from './components/entityAnalysis/entitySpace/entitySpaceAnalysis.component';
import { EntityViewAnalysisComponent }  from './components/entityAnalysis/entityView/entityViewAnalysis.component';
import { GraphAnalysisComponent }  from './components/entityAnalysis/graph/graphAnalysis.component';

//plugins
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    AnalysisNavComponent,
    EntityAnalysisComponent,
    EntitySpaceAnalysisComponent,
    EntityViewAnalysisComponent,
    GraphAnalysisComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
