import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderResultComponent } from './slider-result.component';

describe('SliderResultComponent', () => {
  let component: SliderResultComponent;
  let fixture: ComponentFixture<SliderResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
