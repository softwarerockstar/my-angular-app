import { Component, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLinkComponent } from '../card-link/card-link.component';
import { CardLinkListComponent, CardLinkContentDirective, CardLinkFooterDirective } from '../card-link-list/card-link-list.component';
import { IconLinkComponent } from '../icon-link/icon-link.component';
import { PolicySelectorComponent, PolicySelectotButtonsDirective, PolicySelectorModel } from '../policy-selector/policy-selector.component';
import { TooltipIconComponent } from '../tooltip-icon/tooltip-icon.component';
import { MultiItemLinkButtonComponent, MultiItemLinkButtonModel } from '../multi-item-link-button/multi-item-link-button.component';
import { HyperTabsModule } from '../hyper-tabs/hyper-tabs.module';
import { SimplePopupComponent } from '../simple-popup/simple-popup.component';
 

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
    SimplePopupComponent
  ],
  templateUrl: './demo-shared-components.component.html',
  styleUrls: ['./demo-shared-components.component.scss']
})
export class DemoSharedComponentsComponent {
  @ViewChild('simplePopup', { static: true }) simplePopup!: SimplePopupComponent;
  
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


  cardLinkOnClick(args: any){
    console.log(`cardLinkOnClick: ${args.srcElement.innerText}`);
    this.simplePopup.openDialog();
    return false;
  }

}
