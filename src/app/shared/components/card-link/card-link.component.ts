import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class CardLinkComponent {
  
  @Input() flat: boolean = false;
  @Input() animate: boolean = false;

  @Output() cardLinkClick = new EventEmitter<Event>();

  @Input({ required: true }) titleText: string = '';  
  @Input() subTitle?: string;
  @Input() iconPath?: string;
  @Input() showExternalLinkIcon = false;

  raiseClickEvent(args: Event) {
    if (this.cardLinkClick) this.cardLinkClick.emit(args);
  }
}
