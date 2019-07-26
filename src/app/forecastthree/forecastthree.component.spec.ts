import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastthreeComponent } from './forecastthree.component';

describe('ForecastthreeComponent', () => {
  let component: ForecastthreeComponent;
  let fixture: ComponentFixture<ForecastthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
