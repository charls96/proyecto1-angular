import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalHijo4Component } from './comp-principal-hijo4.component';

describe('CompPrincipalHijo4Component', () => {
  let component: CompPrincipalHijo4Component;
  let fixture: ComponentFixture<CompPrincipalHijo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalHijo4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalHijo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
