import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from '../card-link/card-link.component';
import { CardLinkListComponent, CardLinkContentDirective, CardLinkFooterDirective } from '../card-link-list/card-link-list.component';
import { PolicySelectorComponent } from '../policy-selector/policy-selector.component';

@Component({
  selector: 'app-demo-shared-components',
  standalone: true,
  imports: [
    CommonModule,
    CardLinkComponent,
    CardLinkListComponent,   
    CardLinkContentDirective,
    CardLinkFooterDirective,
    PolicySelectorComponent
  ],
  templateUrl: './demo-shared-components.component.html',
  styleUrls: ['./demo-shared-components.component.css']
})
export class DemoSharedComponentsComponent {
  
  cardLinkOnClick(args: any){
    console.log(args.srcElement.innerText);
  }

}
