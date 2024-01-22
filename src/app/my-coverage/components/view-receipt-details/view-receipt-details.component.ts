import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {Router} from '@angular/router';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

export interface MyCoverageViewReceiptDetailsModel {
  srId: number,
  fullName: string,
  dateOfBirth: string,
  address: string,
  zip: string,
  phoneNumber: string,
  coveredInsured: string,
  paymentAmount: number,
  paymentType: string,
  transactionId: string
  transactionDate: string
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
  isMediumScreeen = false;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.HandsetPortrait)    
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      }); 
      
      this.breakpointObserver.observe(Breakpoints.TabletPortrait)    
      .subscribe((state: BreakpointState) => {
        this.isMediumScreeen = state.matches;
      });      
  }  

  // TODO: remove fake data and hook to API
  receiptDetails: MyCoverageViewReceiptDetailsModel = {
    srId: 1234567, 
    fullName: 'Test User', 
    dateOfBirth: '02/07/1991', 
    address: '1011 Main Street, Dallas, TX',
    zip: '10101',
    phoneNumber: '214-555-1212',
    coveredInsured: 'Test User',
    paymentAmount: 250.48,
    paymentType: 'Credit Card',
    transactionId: '000-1111111111',
    transactionDate: '01/18/2024' };

  closeButtonOnClick() {
    this.router.navigateByUrl('/mycoverage/receipt');
  }

}







