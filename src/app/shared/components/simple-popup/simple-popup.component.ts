import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';
import { SimplePopupButtonModel } from './simple-popup-button.model';

@Component({
  selector: 'simple-popup',
  standalone: true,
  imports: [CommonModule, SimpleDialogComponent, MaterialModule],
  template: '',
  styles: ''
})
export class SimplePopupComponent {

  @Input() title: string = 'Simple Popup';
  @Input() content? : string;
  @Input() showCancelButton: boolean = false;
  @Input() dialogWidth: string = '40vw';
  @Input() allowCloseWithoutAction: boolean = true;
  @Input() buttons?: SimplePopupButtonModel[];
  @Output() buttonClick = new EventEmitter<Event>();


  constructor(private dialog: MatDialog) {}

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'simple-popup-panel';
    dialogConfig.width = this.dialogWidth;        
    dialogConfig.data = {
      title: this.title,
      content: this.content,
      showCancelButton: this.showCancelButton,
      allowCloseWithoutAction: this.allowCloseWithoutAction,
      buttons: this.buttons
    };    

    let dialogRef = this.dialog.open(SimpleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result =>  this.raiseClickEvent(result));
  } 
  
  raiseClickEvent(args: Event) {    
    if (this.buttonClick)
      this.buttonClick.emit(args);
  }
}

export { SimplePopupButtonModel } from "./simple-popup-button.model"
