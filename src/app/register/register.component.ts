import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { RegisterokComponent } from '../registerok/registerok.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private http: HttpClient,private dialog: MatDialog) { }
  onregistercreate(prod: any) {

    this.http.post('http://localhost:3000/register', prod).subscribe(
  () => {
    console.log("register avec succès.");
    this.openregisterokDialog(true);
  },
      (error) => {
        this.openregisterokDialog(false);
    console.log("Une erreur s'est produite lors de la register : ", error);
    // Afficher un message d'erreur à l'utilisateur ou effectuer une action en fonction de l'erreur.
  }
);
 
}

openregisterokDialog(isok:boolean){
  if(isok){
  const dialogRef = this.dialog.open(RegisterokComponent,{
    height: '400px',
    width: '600px',
    data:'tous est ok',
  });

  dialogRef.afterClosed().subscribe(() => { 
    window.location.href = "http://localhost:4200/login";
  });
}
else{
  const dialogRef = this.dialog.open(RegisterokComponent,{
    height: '400px',
    width: '600px',
    data:'il y a un error',
  });
}


 }
   

  

}
