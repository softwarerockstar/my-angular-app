import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Directive, Input, Output, EventEmitter} from '@angular/core'
import {MatCardModule} from '@angular/material/card';

@Directive({
  selector: 'card-link-list-footer',
  standalone: true
})
export class CardLinkFooterDirective{}

@Directive({
  selector: 'card-link-list-content',
  standalone: true
})
export class CardLinkContentDirective{}


@Component({
  selector: 'card-link-list2',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-link-list2.component.html',
  styleUrls: ['./card-link-list2.component.css']
})
export class CardLinkList2Component {
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

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);    
  }

}
