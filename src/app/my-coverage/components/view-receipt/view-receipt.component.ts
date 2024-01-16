import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@Component({
  selector: 'view-receipt',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MaterialModule,
  ],
  templateUrl: './view-receipt.component.html',
  styleUrl: './view-receipt.component.scss'
})
export class MyCoverageViewReceiptComponent {

}
