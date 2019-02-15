import { TestBed } from '@angular/core/testing';

import { AchievementsService } from './achievements.service';

describe('AchievementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AchievementsService = TestBed.get(AchievementsService);
    expect(service).toBeTruthy();
  });
});
