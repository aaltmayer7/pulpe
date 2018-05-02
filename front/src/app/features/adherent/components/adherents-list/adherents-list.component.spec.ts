import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentsListComponent } from './adherents-list.component';

describe('AdherentsListComponent', () => {
  let component: AdherentsListComponent;
  let fixture: ComponentFixture<AdherentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
