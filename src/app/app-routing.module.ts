import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GpsViewComponent } from './gps-view/gps-view.component';
import { ListDesProduitsComponent } from './list-des-produits/list-des-produits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListDesDevisComponent } from './list-des-devis/list-des-devis.component';
import { ListDesContenuDevisComponent } from './list-des-contenu-devis/list-des-contenu-devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';
import { Error404Component } from './error404/error404.component';

 



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'gps', component: GpsViewComponent },
  { path: 'listDesProduits', component: ListDesProduitsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'devis', component: ListDesDevisComponent },
  { path: 'contenudevis', component: ListDesContenuDevisComponent },
  { path: 'adddevis', component: AddDevisComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component:Error404Component},
  

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }




