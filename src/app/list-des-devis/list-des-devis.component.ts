import { Component, OnInit } from '@angular/core';
import { ListDesDevisService } from './list-des-devis.service';

@Component({
  selector: 'app-list-des-devis',
  templateUrl: './list-des-devis.component.html',
  styleUrls: ['./list-des-devis.component.css']
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
      console.log(this.constDataContDevis)
    });
  }

  getMtTotalTTC(x: any): number {
    let jsonData = this.constDataContDevis;
    let sum = 0;
    jsonData.forEach((element: any) => {
      if (element.NumDevis === x) {
        sum += parseFloat(element.PrixTotalTTC);
      }
    });
    return sum;
  }
  
  
  

}
