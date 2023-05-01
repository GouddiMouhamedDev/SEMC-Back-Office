import { Component, OnInit } from '@angular/core';
import { ListDesContenuDevisService } from './list-des-contenu-devis.service';

@Component({
  selector: 'app-list-des-contenu-devis',
  templateUrl: './list-des-contenu-devis.component.html',
  styleUrls: ['./list-des-contenu-devis.component.css']
})
export class ListDesContenuDevisComponent implements OnInit{
  dataContDevis: any;
  constDataContDevis: any;
 
  constructor(private dataService: ListDesContenuDevisService) { }

  ngOnInit(): void {
   
    this.getDataContDevis();
  
  }

  getDataContDevis() {
    this.dataService.getDataContDevis().subscribe((data: any) => {
      this.dataContDevis = data;
      this.constDataContDevis = data as [];
      console.log(this.constDataContDevis)
    });
  } 
}
