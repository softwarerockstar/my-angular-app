import { Component, ContentChildren, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SimpleDialogComponent, SimplePopupButtonModel } from './simple-dialog/simple-dialog.component';
import { SimplePopupActionButtonComponent } from './simple-popup-action-button/simple-popup-action-button.component';


@Component({
  selector: 'simple-popup',
  standalone: true,
  imports: [CommonModule, SimpleDialogComponent, MaterialModule],
  template: '',
  styles: ''
})
export class SimplePopupComponent {

  @ContentChildren(SimplePopupActionButtonComponent) actionButtons?: QueryList<SimplePopupActionButtonComponent>;

  @Input({ required: true }) title: string = '';
  @Input() content? : string;
  @Input() showCancelButton: boolean = false;
  @Input() dialogWidth: string = '40vw';
  @Input() allowCloseWithoutAction: boolean = true;
  @Output() simplePopupButtonClick = new EventEmitter<Event>();

  constructor(private dialog: MatDialog) {}

  openDialog() {

    const buttons: SimplePopupButtonModel[] = [];

    if (this.actionButtons) {
      let btnArray = this.actionButtons?.toArray();
      for (let i=0; i<btnArray.length; i++){
        buttons.push({text: btnArray[i].text, value: btnArray[i].value});
      }
    }

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
      buttons: buttons
    };    

    let dialogRef = this.dialog.open(SimpleDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result =>  this.raiseClickEvent(result));
  } 
  
  raiseClickEvent(args: Event) {    
    if (this.simplePopupButtonClick)
      this.simplePopupButtonClick.emit(args);
  }
}

export { SimplePopupActionButtonComponent } from './simple-popup-action-button/simple-popup-action-button.component';