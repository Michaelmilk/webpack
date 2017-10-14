import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//analysis
import { AnalysisDashboardComponent } from './dashboard/analysisdashboard.component'
import { EntityAnalysisComponent }  from './entityAnalysis.component';
import { EntitySpaceAnalysisComponent } from './entitySpace/entitySpaceAnalysis.component';
import { PayloadExplorerComponent } from './entitySpace/payloadExplorer.component';
import { PayloadStatisticComponent } from './entitySpace/payloadStatistic.component';
import { PayloadFilterComponent } from './entitySpace/payloadFilter.component';
import { EntityViewAnalysisComponent }  from './entityView/entityViewAnalysis.component';
import { GraphAnalysisComponent }  from './graph/graphAnalysis.component';


import { PageNotFoundComponent }  from '../trivial/PageNotFound.component';


let allRoutes: Routes = [];

const dashboardRoutes: Routes = [
  { path: 'dashboard',  component: AnalysisDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

const analysisRoutes: Routes = [
  { path: '', redirectTo: '/entityAnalysis', pathMatch: 'full' },
  { path: 'entityAnalysis',  component: EntityAnalysisComponent },

  //entity space
  { path: 'analysis/entitySpace',  component: EntitySpaceAnalysisComponent },
  // { path: 'analysis/entitySpace/explorer/:id',  component: PayloadExplorerComponent },
  // { path: 'analysis/entitySpace/statistic/:id',  component: PayloadStatisticComponent },
  // { path: 'analysis/entitySpace/filter/:id',  component: PayloadFilterComponent },
  { path: 'analysis/entitySpace/explorer',  component: PayloadExplorerComponent },
  { path: 'analysis/entitySpace/statistic',  component: PayloadStatisticComponent },
  { path: 'analysis/entitySpace/filter',  component: PayloadFilterComponent },

  //entity space
  { path: 'analysis/entityView', component: EntityViewAnalysisComponent },

  //graph
  { path: 'analysis/graph',     component: GraphAnalysisComponent }
];

const wildcardRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

allRoutes = allRoutes.concat(dashboardRoutes, analysisRoutes, wildcardRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(
    allRoutes,
    //his outputs each router event that took place during each navigation lifecycle to the browser console
    //{ enableTracing: true } // <-- debugging purposes only
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}