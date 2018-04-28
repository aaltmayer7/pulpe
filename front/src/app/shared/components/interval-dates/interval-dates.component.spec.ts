import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalDatesComponent } from './interval-dates.component';

describe('IntervalDatesComponent', () => {
  let component: IntervalDatesComponent;
  let fixture: ComponentFixture<IntervalDatesComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [IntervalDatesComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
