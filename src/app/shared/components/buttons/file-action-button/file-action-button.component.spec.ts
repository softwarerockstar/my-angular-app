import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileActionButtonComponent } from './file-action-button.component';

describe('FileActionButtonComponent', () => {
  let component: FileActionButtonComponent;
  let fixture: ComponentFixture<FileActionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileActionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
