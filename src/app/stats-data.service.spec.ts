import { TestBed } from '@angular/core/testing';

import { StatsDataService } from './stats-data.service';

describe('StatsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatsDataService = TestBed.get(StatsDataService);
    expect(service).toBeTruthy();
  });
});
