import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTabsComponent } from './responsive-tabs.component';

describe('ResponsiveTabsComponent', () => {
  let component: ResponsiveTabsComponent;
  let fixture: ComponentFixture<ResponsiveTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveTabsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResponsiveTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
