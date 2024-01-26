import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HistoryItemComponent } from '../history-item/history-item.component';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';

export interface SelectModel {
  name: string
  value: string
}

// TODO: Bind to real data
@Component({
  selector: 'my-coverage-history',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MaterialModule,
    HistoryItemComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class MyCoverageHistoryComponent {

  @Input() memberNameSelectedValue?: string = '0';
  @Input() memberNames?: SelectModel[] = [
    {name: 'Acct Five Eis Test', value: '0'}
  ];

  @Input() policyYearsSelectedValue?: string = '2024';
  @Input() policyYears?: SelectModel[] = [
    {name: '2024', value: '2024'},
    {name: '2023', value: '2023'}
  ];

  @Input() planInfoSelectedValue?: string = '0';
  @Input() planInfos?: SelectModel[] = [
    {name: 'All', value: '0'},
    {name: 'Medical - Domestic Students', value: '1'},
  ];

  isSmallScreen = false;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.HandsetPortrait)    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }  

  closeButtonOnClick() {
    this.router.navigateByUrl('/mycoverage');
  }


}
