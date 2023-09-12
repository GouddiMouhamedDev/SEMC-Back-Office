import { TestBed } from '@angular/core/testing';

import { ListDesContenuDevisService } from './listDesContenuDevis.service';

describe('ListDesContenuDevisService', () => {
  let service: ListDesContenuDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDesContenuDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
