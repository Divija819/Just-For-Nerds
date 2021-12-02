import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdbimagesComponent } from './showdbimages.component';

describe('ShowdbimagesComponent', () => {
  let component: ShowdbimagesComponent;
  let fixture: ComponentFixture<ShowdbimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowdbimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdbimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
