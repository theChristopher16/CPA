import { TestBed } from '@angular/core/testing';

import { ScoresService } from './scores.service';

describe('ScoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScoresService = TestBed.get(ScoresService);
    expect(service).toBeTruthy();
  });
});
