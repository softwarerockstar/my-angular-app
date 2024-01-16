import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicySelectorComponent, PolicySelectotButtonsDirective, PolicySelectorModel } from 'src/app/shared/components/policy-selector/policy-selector.component';
import { IconLinkComponent } from 'src/app/shared/components/icon-link/icon-link.component';
import { SingleItemLinkButtonComponent } from 'src/app/shared/components/single-item-link-button/single-item-link-button.component';
import { HyperTabsModule } from 'src/app/shared/components/hyper-tabs/hyper-tabs.module';
import { MedicalCoverageComponent } from '../components/medical-coverage/medical-coverage.component';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'my-coverage',
  standalone: true,
  imports: [
    CommonModule,
    IconLinkComponent,
    PolicySelectorComponent,
    PolicySelectotButtonsDirective,
    SingleItemLinkButtonComponent,
    HyperTabsModule,
    MedicalCoverageComponent
],
  templateUrl: './my-coverage.component.html',
  styleUrl: './my-coverage.component.scss'
})
export class MyCoverageComponent implements OnInit {
  
  isSmallScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.HandsetPortrait)    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }
  
  policies: PolicySelectorModel[] = [
    {name: 'Old Dominion University # 2023-284-1', value: '2023-284-1'},
    {name: 'Old Dominion University # 2023-384-2', value: '2023-384-2'},
  ];
  

  cardLinkOnClick(args: any){
    console.log(`cardLinkOnClick: ${args.srcElement.innerText}`);    
    return false;
  }


}
