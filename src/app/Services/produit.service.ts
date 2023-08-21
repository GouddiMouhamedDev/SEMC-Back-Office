import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environnements/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  
  getData() {
    return this.http.get<any[]>(`${environment.webApiUrl}/products`);
  }
 
  delete(id: number) {
    return this.http.delete(`${environment.webApiUrl}/product/${id}`);
  }
  
  
  add(body:any){
    return this.http.post(`${environment.webApiUrl}/createproduct`,body)
  }
}
