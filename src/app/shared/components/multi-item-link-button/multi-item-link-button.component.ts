import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'multi-item-link-button',
  templateUrl: './multi-item-link-button.component.html',
  styleUrls: ['./multi-item-link-button.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule]
})
export class MultiItemLinkButtonComponent {

  @Input() onClick?: (event: Event) => boolean;

  //@Output() onClick = new EventEmitter<Event>() => boolean;
  
  public get isSingle() : boolean {
    return this.links != undefined && this.links.length < 2;
  }

  @Input() links?: {
    text: string,
    href?: string,
    target?: string;
  } [];
  
  raiseClickEvent(args: Event):boolean {
    //return this.onClick.emit(args);
    return false;
  }


}
