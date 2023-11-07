import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Input, Output, EventEmitter} from '@angular/core'
import {FormsModule} from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'policy-selector',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    MaterialModule,
    FlexLayoutModule
  ],
  templateUrl: './policy-selector.component.html',
  styleUrls: ['./policy-selector.component.css']
})
export class PolicySelectorComponent {
  @Input() policies?: {
    name: string,
    value: string
  }[] = [
    {name: 'Policy 1', value: 'policy-1'},
    {name: 'Policy 2', value: 'policy-2'}
  ]
}