import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { MatRadioChange } from '@angular/material/radio';

export interface DeliveryPreferencesModel {
  heading?: string,
  subHeading?: string,
  iconPath?: string,
  value?: string;
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

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Small)    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }

  onChange(args: MouseEvent, item: MatRadioChange) {
    console.log(item.value);
  }

  // menuItemClick(args: MouseEvent, item: MatMenuItem) {
  //   if (this.tabs) {
      
  //     let index = (item as any)._elementRef.nativeElement.dataset.index;
      
  //     if (index != this.selectedIndex) {
  //       this.selectedIndex = index;
  //     }
        
  //   }
  // }  

}
