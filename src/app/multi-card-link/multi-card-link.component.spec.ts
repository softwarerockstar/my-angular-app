import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCardLinkComponent } from './multi-card-link.component';

describe('MultiCardLinkComponent', () => {
  let component: MultiCardLinkComponent;
  let fixture: ComponentFixture<MultiCardLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiCardLinkComponent]
    });
    fixture = TestBed.createComponent(MultiCardLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
