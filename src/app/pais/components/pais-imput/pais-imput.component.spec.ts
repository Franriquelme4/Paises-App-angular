import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisImputComponent } from './pais-imput.component';

describe('PaisImputComponent', () => {
  let component: PaisImputComponent;
  let fixture: ComponentFixture<PaisImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisImputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
