import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@Component({
  selector: 'raised-button',
  standalone: true,
  imports: [
    MaterialModule,
  ],
  template: `
    <button mat-raised-button [color]="color" [type]="type" [style]="useStyle" (click)="handleClick()">
      {{ buttonText }}
    </button>
  `,
  styles: [
    `button { 
      min-width: 124px;
      min-height: 39px;
      padding: 12px 20px;
      font-size: 16px;
      font-family: var(--font-medium);
      font-weight: 500;
      border-radius: 0;
      transition: 450ms all ease-in-out;
    }`,
    `button.default { color: var(--color-primary-button-hover) }`,
    `button.primary:hover { background-color: var(--color-primary-button-hover) }`,
  ]
})
export class RaisedButtonComponent {
  @Input({ required: true }) public buttonText!: string;
  @Input() public type: 'button' | 'submit' = 'button';
  @Input() public color: 'default' | 'primary' | 'accent' | 'warn' = 'default';
  @Input() public useStyle: "*" | { [key: string]: string | number; }  = '*';
  @Input() public disabled: boolean = false;
  @Output() public click = new EventEmitter<void>();

  public handleClick(): void {
    this.click.emit();
  }
}
