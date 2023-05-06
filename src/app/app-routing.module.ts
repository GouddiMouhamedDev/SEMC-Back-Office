import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GpsViewComponent } from './gps-view/gps-view.component';
import { IndexComponent } from './index/index.component';
import { ListDesProduitsComponent } from './list-des-produits/list-des-produits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListDesDevisComponent } from './list-des-devis/list-des-devis.component';
import { ListDesContenuDevisComponent } from './list-des-contenu-devis/list-des-contenu-devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';



const routes: Routes = [
  { path: 'gps', component: GpsViewComponent },
  { path: '', component: IndexComponent },
  { path: 'listDesProduits', component: ListDesProduitsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'devis', component: ListDesDevisComponent },
  { path: 'contenudevis', component: ListDesContenuDevisComponent },
  { path: 'adddevis', component: AddDevisComponent }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }




