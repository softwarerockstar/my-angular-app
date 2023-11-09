import { Component } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';

@Component({
  selector: 'card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
})
export class CardLinkComponent {
  
  @Input() flat: boolean = false;
  @Input() animate: boolean = false;

  @Output() onClick = new EventEmitter<Event>();

  @Input() titleText?: string;  
  @Input() subTitle?: string;
  @Input() iconPath?: string;

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);
  }
}
