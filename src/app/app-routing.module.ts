import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//dashboard
import { DashboardComponent}  from './components/dashboard/dashboard.component'

//analysis
import { EntityAnalysisComponent }  from './components/entityAnalysis/entityAnalysis.component';
import { EntitySpaceAnalysisComponent } from './components/entityAnalysis/entitySpace/entitySpaceAnalysis.component';
import { EntityViewAnalysisComponent }  from './components/entityAnalysis/entityView/entityViewAnalysis.component';
import { GraphAnalysisComponent }  from './components/entityAnalysis/graph/graphAnalysis.component';

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
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent }
];

// const analysisRoutes: Routes = [
//   { path: '', redirectTo: '/entityAnalysis', pathMatch: 'full' },
//   { path: 'entityAnalysis',  component: EntityAnalysisComponent },
//   { path: 'entitySpaceAnalysis',  component: EntitySpaceAnalysisComponent },
//   { path: 'entityViewAnalysis', component: EntityViewAnalysisComponent },
//   { path: 'graphAnalysis',     component: GraphAnalysisComponent }
// ];

const analysisRoutes: Routes = [
  { path: '', redirectTo: '/entityAnalysis', pathMatch: 'full' },
  { path: 'entityAnalysis',  component: EntityAnalysisComponent },
  { path: 'analysis/entitySpace',  component: EntitySpaceAnalysisComponent },
  { path: 'analysis/entityViewAnalysis', component: EntityViewAnalysisComponent },
  { path: 'analysis/graphAnalysis',     component: GraphAnalysisComponent }
];

allRoutes = allRoutes.concat(dashboardRoutes, analysisRoutes);

@NgModule({
  imports: [ RouterModule.forRoot(allRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}