import { Component, OnInit } from '@angular/core';
import { ListDesDevisService } from './list-des-devis.service';
@Component({
  selector: 'app-list-des-devis',
  templateUrl: './list-des-devis.component.html',
  styleUrls: ['./list-des-devis.component.css']
})
export class ListDesDevisComponent implements OnInit {
  databs: any;
  constdatabs: any;
  constructor(private dataService: ListDesDevisService) { }


  ngOnInit(): void {
    this.getProduit();
  }
  getProduit() {
    this.dataService.getData().subscribe((data: any) => {

      this.databs = data;
      this.constdatabs = data as [];

    });
  }
}
