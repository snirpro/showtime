import { TestBed } from '@angular/core/testing';

import { EpisodesList } from './episodes-list';

describe('EpisodesList', () => {
  let service: EpisodesList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
