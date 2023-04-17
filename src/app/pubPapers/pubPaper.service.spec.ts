import { TestBed } from '@angular/core/testing';

import { PubPaperService } from './pubPaper.service';

describe('PubPaperService', () => {
  let service: PubPaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PubPaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
