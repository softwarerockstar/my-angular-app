import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { SingleItemLinkButtonComponent } from 'src/app/shared/components/single-item-link-button/single-item-link-button.component';

@Component({
  selector: 'my-coverage-history-item',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    SingleItemLinkButtonComponent
  ],
  templateUrl: './history-item.component.html',
  styleUrl: './history-item.component.scss'
})
export class HistoryItemComponent {
  panelOpenState = true;
  
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