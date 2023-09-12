import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesProduitsComponent } from './listDesProduits.component';

describe('ListDesProduitsComponent', () => {
  let component: ListDesProduitsComponent;
  let fixture: ComponentFixture<ListDesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDesProduitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
