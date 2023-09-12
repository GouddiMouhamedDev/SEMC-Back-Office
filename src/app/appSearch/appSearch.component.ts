import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'appSearch',
  templateUrl: './appSearch.component.html',
  styleUrls: ['./appSearch.component.css']
})
export class AppSearchComponent {
  @Input() data: any[] = [];
  @Input() selectedOption: string = '';
  @Output() searchTextChanged = new EventEmitter<string>();

  searchText: string = '';

  onSearch() {
    this.searchTextChanged.emit(this.searchText);
  }
}
