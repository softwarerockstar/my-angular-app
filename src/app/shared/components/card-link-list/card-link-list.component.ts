import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Directive, Input, Output, EventEmitter} from '@angular/core'
import { MaterialModule } from '../../modules/material/material.module';

@Directive({
  selector: 'card-link-list-footer',
  standalone: true
})
export class CardLinkFooterDirective{}

@Directive({
  selector: 'card-link-list-content',
  standalone: true
})
export class CardLinkContentDirective{}


@Component({
  selector: 'card-link-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './card-link-list.component.html',
  styleUrls: ['./card-link-list.component.scss']
})
export class CardLinkListComponent {
  @Output() cardLinkListClick = new EventEmitter<Event>();

  @Input({ required: true }) heading: string = '';  
  
  raiseClickEvent(args: Event) {
    this.cardLinkListClick.emit(args);    
  }

}
