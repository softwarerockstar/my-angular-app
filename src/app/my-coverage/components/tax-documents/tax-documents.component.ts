import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';

@Component({
  selector: 'app-tax-documents',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent],
  templateUrl: './tax-documents.component.html',
  styleUrl: './tax-documents.component.scss'
})
export class TaxDocumentsComponent {

}
