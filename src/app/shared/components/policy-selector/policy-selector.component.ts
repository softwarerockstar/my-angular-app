import { Component, Directive, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Input, Output, EventEmitter} from '@angular/core'
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

export interface PolicySelectorModel {
  name: string,
  value: string
}

@Directive({
  selector: 'policy-selector-buttons',
  standalone: true
})
export class PolicySelectotButtonsDirective{}

@Component({
  selector: 'policy-selector',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MaterialModule,
  ],
  templateUrl: './policy-selector.component.html',
  styleUrls: ['./policy-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PolicySelectorComponent {  
  @Input() policies?: PolicySelectorModel[];
  @Input() selectedValue?: string;

}
