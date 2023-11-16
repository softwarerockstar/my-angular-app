import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Input } from '@angular/core'

export interface MultiItemLinkButtonModel {
  text: string,
  href?: string,
  target?: string;
}

@Component({
  selector: 'multi-item-link-button',
  templateUrl: './multi-item-link-button.component.html',
  styleUrls: ['./multi-item-link-button.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
  encapsulation: ViewEncapsulation.None
})
export class MultiItemLinkButtonComponent {

  @Input() iconPath? : string;

  @Input() links?: MultiItemLinkButtonModel[];

  public get isSingle() : boolean {
    return this.links != undefined && this.links.length < 2;
  }

}
