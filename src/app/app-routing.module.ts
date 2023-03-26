import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GpsViewComponent } from './gps-view/gps-view.component';
import { IndexComponent } from './index/index.component';
import { ListDesProduitsComponent } from './list-des-produits/list-des-produits.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  { path: 'gps', component:GpsViewComponent  },
  { path:'', component:IndexComponent},
  { path:'list',component:ListDesProduitsComponent},
  { path:'login',component:LoginComponent},
  { path:'register',component:RegisterComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule,RouterModule]
})
export class AppRoutingModule { }




