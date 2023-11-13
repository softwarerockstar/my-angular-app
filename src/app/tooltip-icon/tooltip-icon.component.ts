import { Component, ViewEncapsulation } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material/material.module';


@Component({
  selector: 'tooltip-icon',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './tooltip-icon.component.html',
  styleUrls: ['./tooltip-icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipIconComponent {

  @Output() onClick = new EventEmitter<Event>();
  
  @Input() iconPath?: string;
  @Input() tooltipeText: string = "";    

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);
  }

}
