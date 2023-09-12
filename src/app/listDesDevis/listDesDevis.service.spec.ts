import { TestBed } from '@angular/core/testing';

import { ListDesDevisService } from './listDesDevis..service';

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
