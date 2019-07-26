import { TestBed } from '@angular/core/testing';

import { PredictiontwoService } from './predictiontwo.service';

describe('PredictiontwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictiontwoService = TestBed.get(PredictiontwoService);
    expect(service).toBeTruthy();
  });
});
