import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdverstimentComponent } from './adverstiment.component';

describe('AdverstimentComponent', () => {
  let component: AdverstimentComponent;
  let fixture: ComponentFixture<AdverstimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdverstimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdverstimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
