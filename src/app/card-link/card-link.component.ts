import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.css'],
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
})
export class CardLinkComponent {
  titleText: string = 'ABC';
  titleHref: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  subTitle: string = 'def';
  iconPath: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'
}
