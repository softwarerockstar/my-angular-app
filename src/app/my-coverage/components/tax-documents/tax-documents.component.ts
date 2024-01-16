import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@Component({
  selector: 'my-coverage-tax-documents',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MaterialModule,
  ],
  templateUrl: './tax-documents.component.html',
  styleUrl: './tax-documents.component.scss'
})
export class MyCoverageTaxDocumentsComponent {

}
