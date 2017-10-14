import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';//ngModel

//routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'

//childe module
import { EntityAnalysisModule } from './components/entityAnalysis/entityAnalysis.module'

//import { AnalysisNavComponent }  from './components/entityAnalysis/analysisNav.component';
// import { EntityAnalysisComponent }  from './components/entityAnalysis/entityAnalysis.component';

// import { EntitySpaceAnalysisComponent } from './components/entityAnalysis/entitySpace/entitySpaceAnalysis.component';
// import { PayloadExplorerComponent } from './components/entityAnalysis/entitySpace/payloadExplorer.component';
// import { PayloadStatisticComponent } from './components/entityAnalysis/entitySpace/payloadStatistic.component';
// import { PayloadFilterComponent } from './components/entityAnalysis/entitySpace/payloadFilter.component';

// import { EntityViewAnalysisComponent }  from './components/entityAnalysis/entityView/entityViewAnalysis.component';
// import { EntityGraphAnalysisComponent }  from './components/entityAnalysis/entityGraph/entityGraphAnalysis.component';

//plugins
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'

import { PageNotFoundComponent }  from './components/trivial/pageNotFound.component';



@NgModule({
  imports: [
    BrowserModule,
    EntityAnalysisModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    //AnalysisNavComponent,
    // EntityAnalysisComponent,
    // PayloadExplorerComponent,
    // PayloadStatisticComponent,
    // PayloadFilterComponent,
    // EntitySpaceAnalysisComponent,
    // EntityViewAnalysisComponent,
    // EntityGraphAnalysisComponent,
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
