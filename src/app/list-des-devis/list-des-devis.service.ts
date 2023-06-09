import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListDesDevisService {

  constructor(private http: HttpClient) { }
  getDataDevis() {
    return this.http.get<any[]>('http://localhost:3000/Devis');
  }
 
  deleteDevis(id: number) {
    return this.http.delete(`http://localhost:3000/Devis/${id}`);
  }
  getDataContDevis(){
    return this.http.get <any[]>('http://localhost:3000/contDevis')
  }

}
