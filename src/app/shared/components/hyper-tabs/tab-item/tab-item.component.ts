import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'hyper-tabs-tab-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tab-item.component.html',
  styleUrl: './tab-item.component.scss'
})
export class TabItemComponent {

  @Input({ required: true }) heading: string = '';
  @Input() iconUrl?: string;
  @Input() altIconUrl?: string;

  @ViewChild('tabContent', { static: true }) tabContent!: TemplateRef<any>;


}
