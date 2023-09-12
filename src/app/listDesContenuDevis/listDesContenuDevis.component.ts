import { Component, OnInit } from '@angular/core';
import { ListDesContenuDevisService } from './listDesContenuDevis.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listDesContenuDevis',
  templateUrl: './listDesContenuDevis.component.html',
  styleUrls: ['./listDesContenuDevis.component.css']
})
export class ListDesContenuDevisComponent implements OnInit {
  Proprietes: any;
  filtres: { [key: string]: string } = {};
  filtredData: any;
  formatData: any;

  constructor(private dataService: ListDesContenuDevisService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getDataOneDevis();
  }

  getDataOneDevis() {
    this.route.paramMap.subscribe(params => {
      let id:any = params.get('id');
      
      // Utilisez id ici pour récupérer les données
      this.dataService.getDataContDevis(id).subscribe((data: any) => {
        this.formatData = data;
        
   

        // Format de date
        this.formatData.forEach((obj: any) => {
          obj.createdAt = moment(obj.createdAt).format('DD/MM/YYYY');
          obj.updatedAt = moment(obj.updatedAt).format('DD/MM/YYYY');
        });
        this.Proprietes = Object.keys(this.formatData[0]);
        this.filtredData=this.formatData;
      
      });
    });
  }

  filter() {
    this.filtredData = this.formatData.filter((element: any) => {
      return Object.keys(this.filtres).every((key: string) => {
        const filterValue = this.filtres[key];
        if (filterValue) {
          const propertyValue = element[key]?.toString() || '';
          return propertyValue.includes(filterValue);
        }
        return true;
      });
    });
  }
  
}
