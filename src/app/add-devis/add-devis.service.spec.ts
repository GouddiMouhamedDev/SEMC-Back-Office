import { TestBed } from '@angular/core/testing';

import { AddDevisService } from './add-devis.service';

describe('AddDevisService', () => {
  let service: AddDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
