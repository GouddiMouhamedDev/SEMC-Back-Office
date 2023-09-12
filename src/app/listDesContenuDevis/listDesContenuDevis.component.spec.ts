import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesContenuDevisComponent } from './listDesContenuDevis.component';

describe('ListDesContenuDevisComponent', () => {
  let component: ListDesContenuDevisComponent;
  let fixture: ComponentFixture<ListDesContenuDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDesContenuDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDesContenuDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
