import { TestBed, inject } from '@angular/core/testing';

import { AdherentsService } from './adherents.service';

describe('AdherentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdherentsService]
    });
  });

  it('should be created', inject([AdherentsService], (service: AdherentsService) => {
    expect(service).toBeTruthy();
  }));
});
