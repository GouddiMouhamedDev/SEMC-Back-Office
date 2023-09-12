import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/Environnements/environment.dev';
@Injectable({
  providedIn: 'root'
})
export class ListDesDevisService {

  constructor(private http: HttpClient) { }
  getDataDevis() {
    return this.http.get<any[]>(`${environment.webApiUrl}/Devis`);
  }
 
  deleteDevis(id: number) {
    return this.http.delete(`${environment.webApiUrl}/Devis/${id}`);
  }
  getDataContDevis(){
    return this.http.get <any[]>(`${environment.webApiUrl}/contDevis`)
  }

}
