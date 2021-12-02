import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllEmpComponent } from './show-all-emp.component';

describe('ShowAllEmpComponent', () => {
  let component: ShowAllEmpComponent;
  let fixture: ComponentFixture<ShowAllEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
