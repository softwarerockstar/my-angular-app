import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from '../card-link/card-link.component';
import { CardLinkListComponent, CardLinkContentDirective, CardLinkFooterDirective } from '../card-link-list/card-link-list.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';
import { PolicySelectorComponent, PolicySelectotButtonsDirective } from '../policy-selector/policy-selector.component';

 

@Component({
  selector: 'app-demo-shared-components',
  standalone: true,
  imports: [
    CommonModule,
    CardLinkComponent,
    CardLinkListComponent,   
    CardLinkContentDirective,
    CardLinkFooterDirective,
    IconLinkComponent,
    PolicySelectorComponent,
    PolicySelectotButtonsDirective
  ],
  templateUrl: './demo-shared-components.component.html',
  styleUrls: ['./demo-shared-components.component.css']
})
export class DemoSharedComponentsComponent {
  
  policies: {
    name: string,
    value: string
  }[] = [
    {name: 'Policy 1', value: 'policy-1'},
    {name: 'Policy 2', value: 'policy-2'}
  ];


  cardLinkOnClick(args: any){
    console.log(args.srcElement.innerText);
  }

}
