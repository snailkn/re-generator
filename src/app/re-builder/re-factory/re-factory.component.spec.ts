import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReFactoryComponent } from './re-factory.component';

describe('ReFactoryComponent', () => {
  let component: ReFactoryComponent;
  let fixture: ComponentFixture<ReFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
