import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'

//analysis
import { EntityAnalysisComponent }  from './components/entityAnalysis/entityAnalysis.component';
// import { EntitySpaceAnalysisComponent } from './components/entityAnalysis/entitySpace/entitySpaceAnalysis.component';
// import { PayloadExplorerComponent } from './components/entityAnalysis/entitySpace/payloadExplorer.component';
// import { PayloadStatisticComponent } from './components/entityAnalysis/entitySpace/payloadStatistic.component';
// import { PayloadFilterComponent } from './components/entityAnalysis/entitySpace/payloadFilter.component';
// import { EntityViewAnalysisComponent }  from './components/entityAnalysis/entityView/entityViewAnalysis.component';
// import { EntityGraphAnalysisComponent }  from './components/entityAnalysis/entityGraph/entityGraphAnalysis.component';


import { PageNotFoundComponent }  from './components/trivial/pageNotFound.component';

// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//   { path: 'dashboard',  component: DashboardComponent },
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes',     component: HeroesComponent }
// ];

let allRoutes: Routes = [];

const dashboardRoutes: Routes = [
  { path: 'dashboard',  component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  //{ path: '**', component: PageNotFoundComponent }
];

const wildcardRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

allRoutes = allRoutes.concat(dashboardRoutes, wildcardRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(
    allRoutes,
    //his outputs each router event that took place during each navigation lifecycle to the browser console
    //{ enableTracing: true } // <-- debugging purposes only
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}