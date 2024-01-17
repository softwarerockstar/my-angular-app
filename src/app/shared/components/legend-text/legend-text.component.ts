import { Component, Input } from '@angular/core';

@Component({
  selector: 'legend-text',
  standalone: true,
  template: `<div class="legend-text"><p [class.no-margin]="removeDefaultMargin"><span class="red-star">*</span>{{ text }}</p></div>`,
  styles: [
    `.legend-text { font-family: var(--font-regular); }`,
    `.legend-text p.no-margin { margin: 0; }`,
  ],
})
export class LegendTextComponent {
  @Input() public text: string = '';
  @Input() public removeDefaultMargin: boolean = false;
}
