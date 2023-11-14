import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Input } from '@angular/core'

@Component({
  selector: 'multi-item-link-button',
  templateUrl: './multi-item-link-button.component.html',
  styleUrls: ['./multi-item-link-button.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
  encapsulation: ViewEncapsulation.None
})
export class MultiItemLinkButtonComponent {

  @Input() iconPath? : string;

  @Input() links?: {
    text: string,
    href?: string,
    target?: string;
  } [];

  public get isSingle() : boolean {
    return this.links != undefined && this.links.length < 2;
  }

}
