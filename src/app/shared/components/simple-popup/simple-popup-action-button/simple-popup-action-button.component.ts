import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'simple-popup-action-button',
  standalone: true,
  imports: [CommonModule],
  template: '',
  styles: ''
})
export class SimplePopupActionButtonComponent {
  @Input() text?: string;
  @Input() value?: string;

}
