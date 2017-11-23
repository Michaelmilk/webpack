import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//analysis
import { TriageAnalysisComponent } from './triageAnalysis/triageAnalysis.component'
import { TriageComponent } from './triage.component'


const triageRoutes: Routes = [
  //{ path: '', redirectTo: '/entityAnalysis', pathMatch: 'full' },
  { 
    path: 'triage',
    component: TriageComponent,
    children: [
      {
        path: 'analysis',
        component: TriageAnalysisComponent
      },
      // {
      //   path: 'statistic',
      //   component: AnalysisDashboardComponent
      // }
    ]
  }
];


@NgModule({
  imports: [ 
    RouterModule.forChild(
      triageRoutes,
    //his outputs each router event that took place during each navigation lifecycle to the browser console
    //{ enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  exports: [ RouterModule ]
})
export class TriageRoutingModule {}