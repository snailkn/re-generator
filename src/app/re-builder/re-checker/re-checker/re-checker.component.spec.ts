import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCheckerComponent } from './re-checker.component';

describe('ReCheckerComponent', () => {
  let component: ReCheckerComponent;
  let fixture: ComponentFixture<ReCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
