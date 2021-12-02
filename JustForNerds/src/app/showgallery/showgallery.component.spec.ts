import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowgalleryComponent } from './showgallery.component';

describe('ShowgalleryComponent', () => {
  let component: ShowgalleryComponent;
  let fixture: ComponentFixture<ShowgalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowgalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowgalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
