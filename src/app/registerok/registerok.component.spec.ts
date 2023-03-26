import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterokComponent } from './registerok.component';

describe('RegisterokComponent', () => {
  let component: RegisterokComponent;
  let fixture: ComponentFixture<RegisterokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
