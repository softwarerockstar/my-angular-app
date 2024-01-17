import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendTextComponent } from './legend-text.component';

describe('LegendTextComponent', () => {
  let component: LegendTextComponent;
  let fixture: ComponentFixture<LegendTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegendTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegendTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
