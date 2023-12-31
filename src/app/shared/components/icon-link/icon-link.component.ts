import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'icon-link',
  templateUrl: './icon-link.component.html',
  styleUrls: ['./icon-link.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class IconLinkComponent {
  @Input({ required: true }) titleText: string = '';
  @Input() iconPath?: string;
  @Output() iconLinkClick = new EventEmitter<Event>();
  
  raiseClickEvent(args: Event) {
    this.iconLinkClick.emit(args);
  }

}
