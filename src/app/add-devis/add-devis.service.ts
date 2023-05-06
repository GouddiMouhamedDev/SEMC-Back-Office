import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDevisService {
  

  constructor(private http: HttpClient) { }

  getDataClients() {
    return this.http.get<any[]>('http://localhost:3000/clients');
  }

  getDataProduit() {
    
      return this.http.get<any[]>('http://localhost:3000/products');
    
  }
}
