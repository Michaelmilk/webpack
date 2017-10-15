import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//ngModel

//routes
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//dashboard
import { DashboardComponent} from './components/dashboard/dashboard.component'

//child module
import { EntityAnalysisModule } from './components/entityAnalysis/entityAnalysis.module'

//plugins
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar'

import { PageNotFoundComponent } from './components/trivial/pageNotFound.component';



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
    PageNotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
