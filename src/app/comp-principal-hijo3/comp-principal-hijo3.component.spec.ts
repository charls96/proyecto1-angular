import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalHijo3Component } from './comp-principal-hijo3.component';

describe('CompPrincipalHijo3Component', () => {
  let component: CompPrincipalHijo3Component;
  let fixture: ComponentFixture<CompPrincipalHijo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalHijo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalHijo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
