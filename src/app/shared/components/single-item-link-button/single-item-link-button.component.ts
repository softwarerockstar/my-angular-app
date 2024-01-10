import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Input } from '@angular/core'


@Component({
  selector: 'single-item-link-button',
  templateUrl: './single-item-link-button.component.html',
  styleUrls: ['./single-item-link-button.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule],
  // encapsulation: ViewEncapsulation.None
})
export class SingleItemLinkButtonComponent {

  @Input() iconPath? : string;
  @Input({ required: true }) text!: string;
  @Input() isExternal?: boolean;
  @Input() href?: string;
  @Input() target?: string;  


}
