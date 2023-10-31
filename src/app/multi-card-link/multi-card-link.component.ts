import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'multi-card-link',
  templateUrl: './multi-card-link.component.html',
  styleUrls: ['./multi-card-link.component.css'],
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
    title: "abc",
    subTitle: "def",
    iconPath: "https://myaccount.uhcsr.com/assets/images/ico-coverage-info.png"
  }];

  @Input() footerLinkTitle: string | undefined;

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);
  }

}

