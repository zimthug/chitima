import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTrainComponent } from './find-train.component';

describe('FindTrainComponent', () => {
  let component: FindTrainComponent;
  let fixture: ComponentFixture<FindTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
