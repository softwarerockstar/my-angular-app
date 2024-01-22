import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {Router} from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

export interface MyCoverageViewReceiptDetailsModel {
  taxYear: number,
  schoolName: string,
  taxType: string,
  documentHref: string
}

@Component({
  selector: 'view-receipt-details',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MaterialModule,
  ],
  templateUrl: './view-receipt-details.component.html',
  styleUrl: './view-receipt-details.component.scss'
})
export class MyCoverageViewReceiptDetailsComponent {

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

  receiptDetails: MyCoverageViewReceiptDetailsModel[] = [
    {taxYear: 2023, schoolName: 'Old Dominion University', taxType: '	IRS Form 1095-B', documentHref: '#'},
    {taxYear: 2022, schoolName: 'Old Dominion University', taxType: '	IRS Form 1095-B', documentHref: '#'},
  ];

  closeButtonOnClick() {
    this.router.navigateByUrl('/mycoverage/receipt');
  }

}







