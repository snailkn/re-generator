import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReBoothComponent } from './re-booth.component';

describe('ReBoothComponent', () => {
  let component: ReBoothComponent;
  let fixture: ComponentFixture<ReBoothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReBoothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReBoothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
