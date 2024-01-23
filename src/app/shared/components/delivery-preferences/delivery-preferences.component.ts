import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { MatRadioChange } from '@angular/material/radio';

export interface DeliveryPreferencesModel {
  heading?: string,
  subHeading?: string,
  iconPath?: string,
  value?: number;
}

@Component({
  selector: 'delivery-preferences',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './delivery-preferences.component.html',
  styleUrl: './delivery-preferences.component.scss',
})
export class DeliveryPreferencesComponent implements OnInit {    
  isSmallScreen = false;

  @Input() deliveryPreferenceOptions?: DeliveryPreferencesModel[];
  @Input() footer?: string;  
  @Input() selectedIndex: number = 0;
  @Output() deliveryPreferencesChange = new EventEmitter<number>();
  
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Handset])    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }
  
  raiseChangeEvent(args: MatRadioChange) {
    if (this.deliveryPreferencesChange) this.deliveryPreferencesChange.emit(args.value);
  }

}
