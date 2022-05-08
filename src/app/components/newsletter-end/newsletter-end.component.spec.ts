import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterEndComponent } from './newsletter-end.component';

describe('NewsletterEndComponent', () => {
  let component: NewsletterEndComponent;
  let fixture: ComponentFixture<NewsletterEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsletterEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
