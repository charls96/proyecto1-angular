import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalHijo2Component } from './comp-principal-hijo2.component';

describe('CompPrincipalHijo2Component', () => {
  let component: CompPrincipalHijo2Component;
  let fixture: ComponentFixture<CompPrincipalHijo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalHijo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalHijo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
