import { TestBed } from '@angular/core/testing';

import { ListDesDevisService } from './list-des-devis.service';

describe('ListDesDevisService', () => {
  let service: ListDesDevisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDesDevisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
