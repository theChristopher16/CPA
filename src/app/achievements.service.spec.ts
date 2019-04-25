import { TestBed, async, inject } from '@angular/core/testing';
import { AchievementsService } from './achievements.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AchievementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpClientModule
      ],
      providers: [
        AchievementsService
      ],
    });
  });

  it('should be created', inject([HttpTestingController, AchievementsService],
    (httpMock: HttpTestingController, service: AchievementsService) => {
    expect(service).toBeTruthy();
  }));
});

