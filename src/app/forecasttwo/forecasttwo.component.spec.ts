import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecasttwoComponent } from './forecasttwo.component';

describe('ForecasttwoComponent', () => {
  let component: ForecasttwoComponent;
  let fixture: ComponentFixture<ForecasttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecasttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecasttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
