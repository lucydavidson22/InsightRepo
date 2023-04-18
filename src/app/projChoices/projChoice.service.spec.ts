import { TestBed } from '@angular/core/testing';

import { ProjChoiceService } from './projChoice.service';

describe('ProjChoiceService', () => {
  let service: ProjChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
