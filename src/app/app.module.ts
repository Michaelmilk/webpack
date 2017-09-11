import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';//ngModel

//routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'

//analysis
import { EntityAnalysisComponent }  from './components/entityAnalysis/entityAnalysis.component';
import { EntitySpaceAnalysisComponent } from './components/entityAnalysis/entitySpaceAnalysis.component';
import { EntityViewAnalysisComponent }  from './components/entityAnalysis/entityViewAnalysis.component';
import { GraphAnalysisComponent }  from './components/entityAnalysis/graphAnalysis.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    EntityAnalysisComponent,
    EntitySpaceAnalysisComponent,
    EntityViewAnalysisComponent,
    GraphAnalysisComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
