import { TestBed, async, inject } from '@angular/core/testing';

import { AdherentsGuard } from './adherents.guard';

describe('AdherentsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdherentsGuard]
    });
  });

  it('should ...', inject([AdherentsGuard], (guard: AdherentsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
