import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListDesContenuDevisService {

  constructor(private http: HttpClient) { }

  getDataContDevis(){
    return this.http.get <any[]>('http://localhost:3000/contDevis')
  }

}
