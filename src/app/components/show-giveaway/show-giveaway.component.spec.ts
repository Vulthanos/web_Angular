import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGiveawayComponent } from './show-giveaway.component';

describe('ShowGiveawayComponent', () => {
  let component: ShowGiveawayComponent;
  let fixture: ComponentFixture<ShowGiveawayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGiveawayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGiveawayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
