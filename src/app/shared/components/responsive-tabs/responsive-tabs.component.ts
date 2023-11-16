import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'responsive-tabs',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './responsive-tabs.component.html',
  styleUrl: './responsive-tabs.component.scss'
})
export class ResponsiveTabsComponent {

}
