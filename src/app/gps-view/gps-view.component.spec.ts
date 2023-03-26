import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpsViewComponent } from './gps-view.component';

describe('GpsViewComponent', () => {
  let component: GpsViewComponent;
  let fixture: ComponentFixture<GpsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
