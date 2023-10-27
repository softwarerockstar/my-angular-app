import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css'],
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
})
export class CardLinkComponent {
  
  @Output() onClick = new EventEmitter<Event>();

  @Input() titleText: string = 'Ahkjhkjh jhjhjhkhj BC';  
  @Input() subTitle: string = 'def';
  @Input() iconPath: string = 'https://myaccount.uhcsr.com/assets/images/ico-coverage-info.png'

  raiseClickEvent(args: Event) {
    this.onClick.emit(args);
  }
}
