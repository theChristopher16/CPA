import { TestBed } from '@angular/core/testing';

import { RaspberryPiInfoService } from './raspberry-pi-info.service';

describe('RaspberryPiInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaspberryPiInfoService = TestBed.get(RaspberryPiInfoService);
    expect(service).toBeTruthy();
  });
});
