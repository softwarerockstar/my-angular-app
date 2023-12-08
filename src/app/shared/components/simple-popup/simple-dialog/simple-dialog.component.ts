import { Component, Inject, Input, OnInit } from '@angular/core';
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
  @Input() showCancelButton: boolean = false;

  constructor(
    //private dialogRef: MatDialogRef<SimpleDialogComponent>;
    
    @Inject(MAT_DIALOG_DATA) data: any) {
      this.title = data.title;
      this.content = data.content;
      this.showCancelButton = data.showCancelButton;
    }

}
