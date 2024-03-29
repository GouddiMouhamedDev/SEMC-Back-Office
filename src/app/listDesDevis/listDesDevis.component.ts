import { Component, OnInit } from '@angular/core';
import { ListDesDevisService } from './listDesDevis..service';

@Component({
  selector: 'app-listDesDevis',
  templateUrl: './listDesDevis.component.html',
  styleUrls: ['./listDesDevis.component.css']
})
export class ListDesDevisComponent implements OnInit {
  dataDevis: any;
  constDataDevis: any;
  dataContDevis: any;
  constDataContDevis: any;
  constructor(private dataService: ListDesDevisService) { }

  ngOnInit(): void {
    this.getDevis();
    this.getDataContDevis();
  
  }

  getDevis() {
    this.dataService.getDataDevis().subscribe((data: any) => {
      this.dataDevis = data;
      this.constDataDevis = data as [];
    });
  }

  getDataContDevis() {
    this.dataService.getDataContDevis().subscribe((data: any) => {
      this.dataContDevis = data;
      this.constDataContDevis = data as [];
      
    });
  }

  getMtTotalTTC(x: any): number {
    let jsonData = this.constDataContDevis;
    let sum = 0;
    jsonData?.forEach((element: any) => {
      if (element.NumDevis === x) {
        sum += parseFloat(element.PrixTotalTTC);
      }
    });
    return sum;
  }
  
  
  
  

}
