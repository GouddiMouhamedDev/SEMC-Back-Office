import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  

  constructor(public dialogRef: MatDialogRef<AddComponent>, private http: HttpClient) { }




  onProductscreate(prod: any) {

    this.http.post('http://localhost:3000/createproduct', prod).subscribe({
      next: () => {
        this.closeadd(true);
      },
      error: (error) => {
        console.log("Une erreur s'est produite lors de la création du produit : ", error);
        // Afficher un message d'erreur à l'utilisateur ou effectuer une action en fonction de l'erreur.
      }
    });
    



   
  }

  closeadd(value: boolean): void {
    this.dialogRef.close(value);
  }
  

}
