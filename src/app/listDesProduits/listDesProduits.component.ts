
import { Component, OnInit } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AddComponent } from '../add/add.component';
import { DeleteComponent } from '../delete/delete.component';
import { EditComponent } from '../edit/edit.component';
import { ProduitService } from '../Services/produit.service';



@Component({
  selector: 'app-listDesProduits',
  templateUrl: './listDesProduits.component.html',
  styleUrls: ['./listDesProduits.component.css']
})
export class ListDesProduitsComponent implements OnInit {
  databs: any[] = [];
  modalRef: BsModalRef | undefined;
  modalService: any;
  filtredData: any[] = [] || undefined;
  constructor(private dataService: ProduitService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getProduit();
  }
  getProduit() {
    this.dataService.getData().subscribe((data: any) => {
      this.databs = data;
      this.filtredData = data;
    });
  }

  openDeleteDialog(datas: any): void {

    const dialogRef = this.dialog.open(DeleteComponent, { data: datas });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        
        this.dataService.delete(datas.id).subscribe(() => {
          if (this.databs) {
            
            this.filtredData = this.databs.filter((obj: { id: any; }) => obj.id !== datas.id);
            
          }
        });
      }

    });

  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent, {});

    dialogRef.afterClosed().subscribe((result: any) => { if (result) { this.ngOnInit() } });
  }
  openEditDialog(datas: any) {
    let produit = { ...datas };

    const dialogRef = this.dialog.open(EditComponent, { data: produit });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {

        let index = this.databs?.findIndex((item: any) => item.id == result.id);

        if (index > -1)
          this.databs[index] = result;

      }
    });
  }



  filtredId: any;
  filtredName: any;
  filtredQnt: any;
  filtredDepot: any;
  filtredTva: any;
  filtredPuh: any;
  filtredPuttc: any;
  filtredPaht: any;
  filtredPattc: any;

  filter() {
    this.filtredData = this.databs.filter((element: any) => {
      const idMatches = !this.filtredId || element.id.toString().includes(this.filtredId);
      const nameMatches = !this.filtredName || element.NomProduct.includes(this.filtredName);
      const qntMatches = !this.filtredQnt || element.Qnt.toString().includes(this.filtredQnt);
      const depotMatches = !this.filtredDepot || element.depot.includes(this.filtredDepot);
      const tvaMatches = !this.filtredTva || element.TVA.includes(this.filtredTva);
      const puhMatches = !this.filtredPuh || element.PrixVendHT.includes(this.filtredPuh);
      const puttcMatches = !this.filtredPuttc || element.PrixVendTTC.includes(this.filtredPuttc);
      const puahtMatches = !this.filtredPaht || element.PrixAchatHT.includes(this.filtredPaht);
      const puattcMatches = !this.filtredPattc || element.PrixAchatTTC.includes(this.filtredPattc);

      return idMatches && nameMatches && qntMatches && depotMatches && tvaMatches
        && puahtMatches && puhMatches && puttcMatches && puattcMatches;
    });
  }




}








