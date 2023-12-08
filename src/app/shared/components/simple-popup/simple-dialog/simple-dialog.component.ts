import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'simple-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './simple-dialog.component.html',
  styleUrl: './simple-dialog.component.scss'
})
export class SimpleDialogComponent {
  @Input() title: string = 'Simple Popup';
  @Input() content? : string;
  @Input() allowCloseWithoutAction: boolean = false;

  @Output() onCancelClick = new EventEmitter<Event>();

  constructor(
    private dialogRef: MatDialogRef<SimpleDialogComponent>,    
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.title = data.title;
      this.content = data.content;
      this.allowCloseWithoutAction = data.allowCloseWithoutAction;
    }

    raiseCloseClickEvent(args: Event) {
      //if (this.onCancelClick) this.onCancelClick.emit(args);      
      this.dialogRef.close();
    } 
  
}
