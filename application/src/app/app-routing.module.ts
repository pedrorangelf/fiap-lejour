import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CasamentoComponent } from './pages/casamento/casamento.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{ path: 'home', component: HomeComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'casamento', component: CasamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
