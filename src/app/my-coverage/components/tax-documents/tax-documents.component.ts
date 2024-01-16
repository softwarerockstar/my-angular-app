import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {Router} from '@angular/router';

export interface MyCoverageTaxDocumentsModel {
  taxYear: number,
  schoolName: string,
  taxType: string,
  documentHref: string
}

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

  constructor(private router: Router) {}

  documents: MyCoverageTaxDocumentsModel[] = [
    {taxYear: 2023, schoolName: 'Old Dominion University', taxType: '	IRS Form 1095-B', documentHref: '#'},
    {taxYear: 2022, schoolName: 'Old Dominion University', taxType: '	IRS Form 1095-B', documentHref: '#'},
  ];

  closeButtonOnClick() {
    this.router.navigateByUrl('/mycoverage');
  }
}
