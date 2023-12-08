import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@Component({
  selector: 'simple-popup',
  standalone: true,
  imports: [CommonModule, SimpleDialogComponent, MaterialModule],
  templateUrl: './simple-popup.component.html',
  styleUrl: './simple-popup.component.scss'
})
export class SimplePopupComponent {

  @Input() title: string = 'Simple Popup';
  @Input() content? : string;
  @Input() showCancelButton: boolean = false;

  constructor(private dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'simple-popup-panel';
    dialogConfig.data = {
      title: this.title,
      content: this.content,
      showCancelButton: this.showCancelButton
    };    

    this.dialog.open(SimpleDialogComponent, dialogConfig);
  }  

}
