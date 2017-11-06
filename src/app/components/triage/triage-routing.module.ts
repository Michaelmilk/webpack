import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//analysis
import { TriageComponent } from './triage.component'


const triageRoutes: Routes = [
  //{ path: '', redirectTo: '/entityAnalysis', pathMatch: 'full' },
  { 
    path: 'triage',
    component: TriageComponent,
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