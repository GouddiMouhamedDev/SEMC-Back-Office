import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesDevisComponent } from './list-des-devis.component';

describe('ListDesDevisComponent', () => {
  let component: ListDesDevisComponent;
  let fixture: ComponentFixture<ListDesDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDesDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDesDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
