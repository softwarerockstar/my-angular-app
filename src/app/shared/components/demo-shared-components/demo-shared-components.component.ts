import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from '../card-link/card-link.component';
import { CardLinkListComponent, CardLinkContentDirective, CardLinkFooterDirective } from '../card-link-list/card-link-list.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';
import { PolicySelectorComponent, PolicySelectotButtonsDirective, PolicySelectorModel } from '../policy-selector/policy-selector.component';
import { TooltipIconComponent } from '../tooltip-icon/tooltip-icon.component';
import { MultiItemLinkButtonComponent, MultiItemLinkButtonModel } from '../multi-item-link-button/multi-item-link-button.component';
import { HyperTabsModule } from '../hyper-tabs/hyper-tabs.module';
import { DeliveryPreferencesComponent, DeliveryPreferencesModel } from '../delivery-preferences/delivery-preferences.component';
 

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
    HyperTabsModule,
    DeliveryPreferencesComponent
  ],
  templateUrl: './demo-shared-components.component.html',
  styleUrls: ['./demo-shared-components.component.scss']
})
export class DemoSharedComponentsComponent {
  
  policies: PolicySelectorModel[] = [
    {name: 'Policy 1a', value: 'policy-1'},
    {name: 'Policy 2b', value: 'policy-2'}
  ];

  multiItemlinks: MultiItemLinkButtonModel[] = [
    {text: "Click Me"},
    {text: "Google (New Tab)", href: "https://www.google.com", target: "_blank"},
    {text: "Bing (New Tab)", href: "https://www.bing.com", target: "_blank"},
    {text: "Yahoo! (Same Tab)", href: "https://www.yahoo.com"}
  ]

  deliveryPreferenceOptions: DeliveryPreferencesModel[] = [
    {heading: 'By Email', subHeading: 'stsppm-premiumba@uhcsr.com', iconPath: '/assets/img/ico-email.png', value: 0},
    {heading: 'By U.S. Mail', subHeading: '65 East Rocky Oak Blvd.<br/>DECATUR, GA<br/>30033', iconPath: '/assets/img/usmaill-ico.png', value: 1},
  ]
  
  
  cardLinkOnClick(args: any){
    console.log(args.srcElement.innerText);
    return false;
  }

  deliveryPreferenceOnChange(value: number) {
    console.log(`Delivery preference changed to: ${value}`);
  }

}
