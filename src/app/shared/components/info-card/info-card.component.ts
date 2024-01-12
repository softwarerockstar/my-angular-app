import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'info-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
  @Input({ required: true }) public title: string = 'Unknown';
  @Input() public elevated: boolean = true;
  @Input() public closeButtonIconFileName: string = 'close-icon.png';

  @Input() public hasFooter: boolean = false;

  @Output() public closeButtonClicked = new EventEmitter<void>();

  public closeInfoCard = (): void => {
    this.closeButtonClicked.emit();
  }
}
