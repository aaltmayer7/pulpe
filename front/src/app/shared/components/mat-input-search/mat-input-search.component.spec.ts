import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatInputSearchComponent } from './mat-input-search.component';

describe('MatInputSearchComponent', () => {
  let component: MatInputSearchComponent;
  let fixture: ComponentFixture<MatInputSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatInputSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
