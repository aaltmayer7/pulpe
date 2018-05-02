import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentsComponent } from './adherents.component';

describe('AdherentsComponent', () => {
  let component: AdherentsComponent;
  let fixture: ComponentFixture<AdherentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdherentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
