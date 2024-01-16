import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from 'src/app/shared/components/info-card/info-card.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@Component({
  selector: 'my-coverage-id-card',
  standalone: true,
  imports: [
    CommonModule,
    InfoCardComponent,
    MaterialModule,
  ],
  templateUrl: './id-card.component.html',
  styleUrl: './id-card.component.scss'
})
export class MyCoverageIdCardComponent {

}
