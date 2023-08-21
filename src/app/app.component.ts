import { Component, OnInit } from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';
   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
    console.table(this.title);
  }
  
  title = 'Back-Office';
 
  
}
