import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-list-dialog',
  templateUrl: './list-dialog.component.html',
  styleUrls: ['./list-dialog.component.css']
})
export class ListDialogComponent {
  databs = this.data;
  searchText: any;
  selectedOption: any;

  constructor(public dialogRef: MatDialogRef<ListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  Proprietes = Object.keys(this.data[0]);

  filterData(selectedOption: any, searchText: string) {
    const lowerCaseSearchText = searchText.toLowerCase();
    this.databs = this.data.filter((obj: any) => {
      for (const key in obj) {
        const lowerCaseValue = obj[key]?.toString()?.toLowerCase() ?? '';
        const matchesSelectedOption = key === selectedOption || !selectedOption;
        const matchesSearchText = lowerCaseValue.includes(lowerCaseSearchText);
        if (matchesSelectedOption && matchesSearchText) {
          return true;
        }
      }
      return false;
    });
  }
  




  closeDialog(object: any) {
    this.dialogRef.close(object);
  }
}
