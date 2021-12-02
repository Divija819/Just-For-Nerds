import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpidComponent } from './empid.component';

describe('EmpidComponent', () => {
  let component: EmpidComponent;
  let fixture: ComponentFixture<EmpidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
