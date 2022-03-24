import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalHijo1Component } from './comp-principal-hijo1.component';

describe('CompPrincipalHijo1Component', () => {
  let component: CompPrincipalHijo1Component;
  let fixture: ComponentFixture<CompPrincipalHijo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalHijo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalHijo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
