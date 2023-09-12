import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GpsViewComponent } from './gpsView/gpsView.component';
import { ListDesProduitsComponent } from './listDesProduits/listDesProduits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListDesDevisComponent } from './listDesDevis/listDesDevis.component';
import { ListDesContenuDevisComponent } from './listDesContenuDevis/listDesContenuDevis.component';
import { AddDevisComponent } from './addDevis/addDevis.component';
import { Error404Component } from './error404/error404.component';

 



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'contenuDevis/:id', component: ListDesContenuDevisComponent },
  { path: 'gps', component: GpsViewComponent },
  { path: 'listDesProduits', component: ListDesProduitsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'devis', component: ListDesDevisComponent },
  { path: 'addDevis', component: AddDevisComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component:Error404Component},
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }




