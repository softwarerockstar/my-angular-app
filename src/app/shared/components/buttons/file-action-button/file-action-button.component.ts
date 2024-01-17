import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { LegendTextComponent } from '../../legend-text/legend-text.component';

@Component({
  selector: 'file-action-button',
  standalone: true,
  imports: [
    LegendTextComponent,
    MaterialModule,
  ],
  templateUrl: './file-action-button.component.html',
  styleUrl: './file-action-button.component.scss'
})
export class FileActionButtonComponent {
  @Input({ required: true }) public buttonText!: string;
  @Input({ required: true }) public iconFileName!: string;

  @Output() public onClick = new EventEmitter<void>();

  public onButtonClicked = (): void => {
    this.onClick.emit();
  }
}
