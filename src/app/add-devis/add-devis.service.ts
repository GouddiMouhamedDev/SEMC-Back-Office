import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddDevisService {
  private url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getDataClients() {
    
    return this.http.get<any[]>(this.url+'clients');
  }

  getDataProduit() {
    
      return this.http.get<any[]>(this.url+'products');
    
  }
}
