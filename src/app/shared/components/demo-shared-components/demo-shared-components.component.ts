import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from '../card-link/card-link.component';
import { CardLinkListComponent, CardLinkContentDirective, CardLinkFooterDirective } from '../card-link-list/card-link-list.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';
import { PolicySelectorComponent, PolicySelectotButtonsDirective } from '../policy-selector/policy-selector.component';
import { TooltipIconComponent } from '../tooltip-icon/tooltip-icon.component';
import { MultiItemLinkButtonComponent } from '../multi-item-link-button/multi-item-link-button.component';
 

@Component({
  selector: 'demo-shared-components',
  standalone: true,
  imports: [
    CommonModule,
    CardLinkComponent,
    CardLinkListComponent,   
    CardLinkContentDirective,
    CardLinkFooterDirective,
    IconLinkComponent,
    PolicySelectorComponent,
    PolicySelectotButtonsDirective,
    TooltipIconComponent,
    MultiItemLinkButtonComponent,
  ],
  templateUrl: './demo-shared-components.component.html',
  styleUrls: ['./demo-shared-components.component.css']
})
export class DemoSharedComponentsComponent {
  
  policies: {
    name: string;
    value: string
  }[] = [
    {name: 'Policy 1a', value: 'policy-1'},
    {name: 'Policy 2b', value: 'policy-2'}
  ];

  multiItemlinks: {
    text: string,
    url: string,
    target?: string;
  } [] = [
    {text: "Google", url: "https://www.google.com"},
    {text: "Bing", url: "https://www.bing.com"},
    {text: "Yahoo!", url: "https://www.yahoo.com"}
  ]


  cardLinkOnClick(args: any){
    console.log(args.srcElement.innerText);
  }

}
