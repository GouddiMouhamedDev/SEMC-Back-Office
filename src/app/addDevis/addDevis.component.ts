import { Component } from '@angular/core';
import { AddDevisService } from '../Services/Devis.service';
import { ListDialogComponent } from '../listDialog/listDialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';


@Component({
  selector: 'app-addDevis',
  templateUrl: './addDevis.component.html',
  styleUrls: ['./addDevis.component.css']
})
export class AddDevisComponent {

  dataClients: any;
  mapDataClients: any;
  clientsTables: any;
  searchTerm: string = '';
  IdClientcart: any;
  NomClient: any;
  NumClient: any;
  Adresse: any;
  selectedDate = moment().format('DD/MM/YYYY');
  elementSelectionne: any;
  dataProduits: any;
  mapDataProduits: any;
  Mat: any;
  Solde: any;
  tableauDonnees: any[] = []; // Initialisez tableauDonnees comme un tableau vide
  constdata: any;
  

  constructor(private dataService: AddDevisService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClients();
    this.getProduits();
  }

  getClients() {
    this.dataService.getDataClients().subscribe((data: any) => {
      this.dataClients = data;
      this.mapDataClients = this.dataClients.map(({ id, Nom, Num, Adresse }: any) => ({ id, Nom, Num, Adresse }));
    });
  }

  getProduits() {
    this.dataService.getDataProduit().subscribe((data: any) => {
      this.dataProduits = data;
      this.constdata = data.reduce((acc: any, curr: any) => {
        acc[curr.id] = curr;
        return acc;
      }, {});
      this.mapDataProduits = this.dataProduits.map(({ id, NomProduct, PrixVendTTC }: any) => ({ id, NomProduct, PrixVendTTC }));
    });
  }

  // for dev filter recherhce list clients
  get filteredClients(): any[] {
    const filtered = this.clientsTables.filter((client: any) => {
      return client.id.toString().includes(this.searchTerm) || client.Nom.includes(this.searchTerm);
    });
    return filtered;
  }

  openListDialogComponent(data: any, type: 'clients' | 'produits'): void {
    const dialogRef = this.dialog.open(ListDialogComponent, {
      width: '600px',
      height: '550px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {
        if (type === 'clients') {
          this.IdClientcart = result.id;
          this.NomClient = result.Nom.replace(/"/g, '');
          this.NumClient = result.Num.replace(/"/g, '');
          this.Adresse = result.Adresse.replace(/"/g, '');
          this.Mat = this.dataClients.find((obj: any) => obj.id === result.id).Mat.replace(/"/g, '');
          this.Solde = this.dataClients.find((obj: any) => obj.id === result.id).Solde.replace(/"/g, '');
        } else if (type === 'produits') {
          const produit = this.constdata[result.id];
          if (produit) {
            const nouvelleLigne = {
              id: produit.id,
              nom: produit.NomProduct,
              qnt: 1,
              depot: produit.depot,
              tva: produit.TVA,
              prixVendHT: produit.PrixVendHT,
              prixVendTTC: produit.PrixVendTTC,
              img: produit.img,
             
            };
            this.tableauDonnees.push(nouvelleLigne);
          }
        }
      }
    });
  }
  calculateTotal(ligne: any) {
    ligne.total = ligne.qnt * ligne.prixVendTTC;
  }
  
}
