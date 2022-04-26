import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEndComponent } from './ticket-end.component';

describe('TicketEndComponent', () => {
  let component: TicketEndComponent;
  let fixture: ComponentFixture<TicketEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
