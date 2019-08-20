import { TestBed } from '@angular/core/testing';

import { MatchScoresService } from './match-scores.service';

describe('MatchScoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchScoresService = TestBed.get(MatchScoresService);
    expect(service).toBeTruthy();
  });
});
