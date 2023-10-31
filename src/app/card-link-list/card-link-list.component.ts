import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'card-link-list',
  templateUrl: './card-link-list.component.html',
  styleUrls: ['./card-link-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatGridListModule],
})
export class MultiCardLinkComponent {
  @Output() onClick = new EventEmitter<Event>();

  @Input() heading?: string;  
  
  @Input() links?: {
    title: string;
    subTitle: string;
    iconPath: string;
  }[] = [{
    title: "I am link one",
    subTitle: "Please click link one",
    iconPath: "https://myaccount.uhcsr.com/assets/images/ico-coverage-info.png"
  },
  {
    title: "I am link two",
    subTitle: "Or you may click link two",
    iconPath: "https://myaccount.uhcsr.com/assets/images/ico-completed-claims.png"
  }];

  @Input() footerLinkTitle: string | undefined;

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);    
  }

}

