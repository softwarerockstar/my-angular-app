import { Component, ViewEncapsulation } from '@angular/core';
import {Input } from '@angular/core'
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';


@Component({
  selector: 'tooltip-icon',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './tooltip-icon.component.html',
  styleUrls: ['./tooltip-icon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipIconComponent {

  @Input() iconPath?: string;
  @Input() tooltipeText: string = "";    

}
