import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLocationComponent } from './hero-Location.component';

describe('HeroLocationComponent', () => {
  let component: HeroLocationComponent;
  let fixture: ComponentFixture<HeroLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
