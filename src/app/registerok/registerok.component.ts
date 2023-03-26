import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-registerok',
  templateUrl: './registerok.component.html',
  styleUrls: ['./registerok.component.css']
})
export class RegisterokComponent {
  constructor(public dialogRef: MatDialogRef<RegisterokComponent>, 
     @Inject(MAT_DIALOG_DATA) public data: any) { }
  



}


