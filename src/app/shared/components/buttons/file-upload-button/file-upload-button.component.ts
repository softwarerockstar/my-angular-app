import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { LegendTextComponent } from '../../legend-text/legend-text.component';

@Component({
  selector: 'file-upload-button',
  standalone: true,
  imports: [
    LegendTextComponent,
    MaterialModule,
  ],
  templateUrl: './file-upload-button.component.html',
  styleUrl: './file-upload-button.component.scss'
})
export class FileUploadButtonComponent {
  @Input() public buttonText: string = 'Choose File';
  @Input() public multiple: boolean = false;
  @Output() public onFilesListChange = new EventEmitter<FileList | null>();

  @ViewChild('fileInput') public fileInput!: ElementRef<HTMLInputElement>;

  public openDialog = (): void => {
    this.fileInput.nativeElement.click();
  }

  public handleFileChange = (event: Event): void => {
    const files: FileList | null = event.target ? (event.target as HTMLInputElement).files : null;
    if (files && files.length > 0) {
      this.onFilesListChange.emit(files);
    }
  }
}
