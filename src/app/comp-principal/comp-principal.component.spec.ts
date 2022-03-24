import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrincipalComponent } from './comp-principal.component';

describe('CompPrincipalComponent', () => {
  let component: CompPrincipalComponent;
  let fixture: ComponentFixture<CompPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
