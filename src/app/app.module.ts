import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListDesProduitsComponent } from './listDesProduits/listDesProduits.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GpsViewComponent } from './gpsView/gpsView.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
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
import { ListDesDevisComponent } from './listDesDevis/listDesDevis.component';
import { ListDesContenuDevisComponent } from './listDesContenuDevis/listDesContenuDevis.component';
import { AddDevisComponent } from './addDevis/addDevis.component';
import { ListDialogComponent } from './listDialog/listDialog.component';
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import { MatDateFormats, MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS  } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AppSearchComponent } from './appSearch/appSearch.component';
import { Error404Component } from './error404/error404.component';






export const MY_FORMAT: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    ListDesProduitsComponent,
    SidebarComponent,
    GpsViewComponent,
    NavbarComponent,
    DeleteComponent,
    AddComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    RegisterokComponent,
    ListDesDevisComponent,
    ListDesContenuDevisComponent,
    AddDevisComponent,
    ListDialogComponent,
    AppSearchComponent,
    Error404Component,

    
 
    
    
 
    
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
    FormsModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
   

  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
  { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
