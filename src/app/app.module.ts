import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListDesProduitsComponent } from './list-des-produits/list-des-produits.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GpsViewComponent } from './gps-view/gps-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { AddComponent } from './add/add.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { RegisterokComponent } from './registerok/registerok.component';
import { ListDesDevisComponent } from './list-des-devis/list-des-devis.component';
import { ListDesContenuDevisComponent } from './list-des-contenu-devis/list-des-contenu-devis.component';
import { AddDevisComponent } from './add-devis/add-devis.component';


@NgModule({
  declarations: [
    AppComponent,
    ListDesProduitsComponent,
    SidebarComponent,
    GpsViewComponent,
    NavbarComponent,
    IndexComponent,
    DeleteComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    RegisterokComponent,
    ListDesDevisComponent,
    ListDesContenuDevisComponent,
    AddDevisComponent
    
    
 
    
  ],
  entryComponents:[
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
