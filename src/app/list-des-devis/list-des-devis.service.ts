import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListDesDevisService {

  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any[]>('http://localhost:3000/Devis');
  }
 
  delete(id: number) {
    return this.http.delete(`http://localhost:3000/Devis/${id}`);
  }
  
  
  add(body:any){
    return this.http.post('http://localhost:3000/createDevis',body)
  }

}
