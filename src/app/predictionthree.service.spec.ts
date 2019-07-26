import { TestBed } from '@angular/core/testing';

import { PredictionthreeService } from './predictionthree.service';

describe('PredictionthreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PredictionthreeService = TestBed.get(PredictionthreeService);
    expect(service).toBeTruthy();
  });
});
