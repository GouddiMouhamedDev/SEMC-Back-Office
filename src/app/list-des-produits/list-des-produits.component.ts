
import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddComponent } from '../add/add.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import { DataService } from './list-desproduits.service';



@Component({
  selector: 'app-list-des-produits',
  templateUrl: './list-des-produits.component.html',
  styleUrls: ['./list-des-produits.component.css']
})
export class ListDesProduitsComponent implements OnInit {
  databs: any[] | undefined;
  modalRef: BsModalRef | undefined;
  modalService: any;
  allData: any;
  selectedOption: any;
  constdatabs: any;
  searchText: string = '';




  constructor(private dataService: DataService, private dialog: MatDialog) { }


  ngOnInit() {
    this.selectedOption = "Nom";
    this.dataService.getData().subscribe(data => {

      this.databs = data as [];
      this.constdatabs = data as [];

    });


  }


  openDeleteDialog(datas: any): void {

    const dialogRef = this.dialog.open(DeleteComponent,{data: datas});

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.dataService.delete(datas.id).subscribe(() => {
          if (this.databs) {
            this.databs = this.databs.filter((obj: { id: any; }) => obj.id !== datas.id);
          }
        });
      }

    });

  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent,{});

    dialogRef.afterClosed().subscribe((result: any) => { if (result) { this.ngOnInit() } });
    }
  openEditDialog(datas: any) {
    const dialogRef = this.dialog.open(EditComponent,{data: datas});

    dialogRef.afterClosed().subscribe((result: any) => { if (result) { this.ngOnInit() } });
  }
  filterData(selectedOption: any, searchText: string) {
    searchText = searchText.toLowerCase();
    if (searchText) {
      this.databs = this.constdatabs.filter((obj: any) => {
        const field = obj[selectedOption].toString().toLowerCase();
        return field.includes(searchText);
      });
    } else {
      this.databs = this.constdatabs;
    }
  }
   convertirNombre(valeur: any) {
    const nombre = Number(valeur); // Convertit la valeur en nombre à virgule flottante
    if (isNaN(nombre)) { // Vérifie si la valeur n'est pas un nombre valide
      return valeur; // Si la valeur n'est pas un nombre valide, renvoie la valeur d'origine sans modification
    } else if (nombre % 1 === 0) { // Vérifie si la valeur est un nombre entier
      return nombre.toString(); // Si la valeur est un nombre entier, renvoie la valeur en tant que chaîne de caractères sans décimales
    } else {
      return nombre.toFixed(2).replace(/\.?0+$/, ''); // Supprime les zéros inutiles après la virgule et renvoie la valeur en tant que chaîne de caractères
    }
  }
  
}








