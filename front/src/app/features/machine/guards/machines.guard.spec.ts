import { TestBed, async, inject } from '@angular/core/testing';

import { MachinesGuard } from './machines.guard';

describe('MachinesGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MachinesGuard]
    });
  });

  it('should ...', inject([MachinesGuard], (guard: MachinesGuard) => {
    expect(guard).toBeTruthy();
  }));
});
