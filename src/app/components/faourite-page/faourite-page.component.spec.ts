import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaouritePageComponent } from './faourite-page.component';

describe('FaouritePageComponent', () => {
  let component: FaouritePageComponent;
  let fixture: ComponentFixture<FaouritePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaouritePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaouritePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
