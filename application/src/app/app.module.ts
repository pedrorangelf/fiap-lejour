import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CasamentoComponent } from './pages/casamento/casamento.component';
import { CerimoniaComponent } from './pages/cerimonia/cerimonia.component';
import { ProclamasComponent } from './pages/proclamas/proclamas.component';
import { DiarioOficialComponent } from './pages/diario-oficial/diario-oficial.component';
// import { SmartCasamentoService } from './services/smart-casamento.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    CasamentoComponent,
    CerimoniaComponent,
    ProclamasComponent,
    DiarioOficialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
