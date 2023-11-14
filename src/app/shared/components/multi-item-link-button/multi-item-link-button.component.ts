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

  
  public get isSingle() : boolean {
    return this.links != undefined && this.links.length < 2;
  }

  @Input() links?: {
    text: string,
    url: string,
    target?: string;
  } [];

}
