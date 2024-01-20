import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {Router} from '@angular/router';
import { FileActionButtonComponent } from 'src/app/shared/components/buttons/file-action-button/file-action-button.component';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';

export interface MyCoverageViewReceiptModel {
  submittedOn: string,
  status: string,
  documentHref: string
}

@Component({
  selector: 'my-coverage-tax-documents',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    FileActionButtonComponent,
    MaterialModule,
  ],
  templateUrl: './view-receipt.component.html',
  styleUrl: './view-receipt.component.scss'
})
export class MyCoverageViewReceiptComponent {

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

  // TODO: remove fake data
  // TODO: remove console.log debugs
  
  documents: MyCoverageViewReceiptModel[] = [
    {submittedOn: '11/29/2023 06:03:15 PM', status: 'Submitted', documentHref: '#'},
    {submittedOn: '10/29/2023 06:02:15 PM', status: 'Submitted', documentHref: '#'},
  ];

  closeButtonOnClick() {
    this.router.navigateByUrl('/mycoverage');
  }

  showDocument(docHref: string) {
    console.log('navigating docHref');
    this.router.navigateByUrl(docHref);
  }

  viewDetails() {
    console.log('View Details clicked');
  }

}



