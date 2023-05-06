import { Component, OnInit } from '@angular/core';
import { ListDesContenuDevisService } from './list-des-contenu-devis.service';
import * as moment from 'moment';
@Component({
  selector: 'app-list-des-contenu-devis',
  templateUrl: './list-des-contenu-devis.component.html',
  styleUrls: ['./list-des-contenu-devis.component.css']
})
export class ListDesContenuDevisComponent implements OnInit {
  dataContDevis: any;
  constDataContDevis: any;
  searchText = "";
  selectedOption: any;
  Proprietes: any;
  databs: any;
  constructor(private dataService: ListDesContenuDevisService) { }

  ngOnInit() {
    this.getDataContDevis();

  }






  getDataContDevis() {

         //map
    this.dataService.getDataContDevis().subscribe((data: any) => {
      this.databs = data.map(({ id, NumDevis, idClients, NomProduct, Qnt, PrixUnitTTC, PrixTotalTTC, TVA, createdAt }: any) => ({ id, NumDevis, idClients, NomProduct, Qnt, PrixUnitTTC, PrixTotalTTC, TVA, createdAt }));;


         //format date
      this.databs.forEach((obj: any) => {
        obj.createdAt = moment(obj.createdAt).format('DD/MM/YYYY');
      });

      this.constDataContDevis = this.databs;
      this.Proprietes = Object.keys(this.databs[0]);
  console.log(" this.Proprietes", this.Proprietes)
    });
  }

  filterData(selectedOption: any, searchText: string) {
    const lowerCaseSearchText = searchText.toLowerCase();
    this.databs = this.constDataContDevis.filter((obj: any) => {
      for (const key in obj) {
        const lowerCaseValue = obj[key]?.toString()?.toLowerCase() ?? '';
        const matchesSelectedOption = key === selectedOption || !selectedOption;
        const matchesSearchText = lowerCaseValue.includes(lowerCaseSearchText);
        if (matchesSelectedOption && matchesSearchText) {
          return true;
        }
      }
      return false;
    });
  }

}
