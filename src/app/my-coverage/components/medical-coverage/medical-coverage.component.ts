import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleItemLinkButtonComponent } from 'src/app/shared/components/single-item-link-button/single-item-link-button.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

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
  accountType: string = 'Primary';
  accountName: string = 'Acct Five Eis Test';
  panelOpenState = true;
}
