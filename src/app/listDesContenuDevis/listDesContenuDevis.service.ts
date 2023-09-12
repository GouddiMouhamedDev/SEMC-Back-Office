import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/Environnements/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class ListDesContenuDevisService {

  constructor(private http: HttpClient) { }

  getDataContDevis(id:any){
    return this.http.get <any[]>(`${environment.webApiUrl}/contDevis/${id}`);
  }

}
