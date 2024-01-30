import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleItemLinkButtonComponent } from 'src/app/shared/components/single-item-link-button/single-item-link-button.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'medical-coverage',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    SingleItemLinkButtonComponent
  ],
  templateUrl: './medical-coverage.component.html',
  styleUrl: './medical-coverage.component.scss'
})
export class MedicalCoverageComponent {
  panelOpenState = true;

  isSmallScreen = false;
  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 775px)')    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }  

  
  @Input({required: true}) accountType: string = '';
  @Input({required: true}) accountName: string = '';
  @Input({required: true}) srId: string = '';
  @Input({required: true}) policyNumber: string = '';
  @Input({required: true}) clientName: string = '';

  @Input() summaryBrochureLink?: string;
  @Input() brochureCertificateLink?: string;
  @Input() confirmationOfCoverageLink?: string;

  @Input() coverageDate?: string;
  @Input() coverageType?: string;
  @Input() planInfo?: string;
  
}
