import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayEndComponent } from './giveaway-end.component';

describe('GiveawayEndComponent', () => {
  let component: GiveawayEndComponent;
  let fixture: ComponentFixture<GiveawayEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
