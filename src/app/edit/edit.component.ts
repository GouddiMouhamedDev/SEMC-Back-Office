import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eidt',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  product: any = {};

  constructor(public dialogRef: MatDialogRef<EditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
     private http: HttpClient) { 
       this.product = { ...data };
     }

  onProductsEdit(prod: any) {
    this.http.patch(`http://localhost:3000/product/${this.data.id}`, prod).subscribe(
      () => {
        console.log("Produit modifier avec succès.");
        this.closeadd(true);
      },
      error => {
        console.log("Une erreur s'est produite lors de la modification du produit : ", error);
      
      }
    );
  }

  closeadd(value: boolean): void {
    this.dialogRef.close(value);
  }
}
