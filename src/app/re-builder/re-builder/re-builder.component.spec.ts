import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReBuilderComponent } from './re-builder.component';

describe('ReBuilderComponent', () => {
  let component: ReBuilderComponent;
  let fixture: ComponentFixture<ReBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
