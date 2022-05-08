import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTicket2Component } from './generate-ticket2.component';

describe('GenerateTicket2Component', () => {
  let component: GenerateTicket2Component;
  let fixture: ComponentFixture<GenerateTicket2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateTicket2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTicket2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
