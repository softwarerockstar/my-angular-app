import { Component, ContentChildren, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { MatMenuItem } from '@angular/material/menu';


@Component({
  selector: 'hyper-tabs-tab-group-accordian',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './tab-group-accordian.component.html',
  styleUrl: './tab-group-accordian.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HyperTabGroupAccordianComponent implements OnInit {
  @ContentChildren(TabItemComponent) tabs?: QueryList<TabItemComponent>;

  panelOpenState: boolean = false;
    
  @Input() selectedIndex = 0;  
  
  isSmallScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.HandsetPortrait)    
      .subscribe((state: BreakpointState) => {
        if (state.matches)
          this.isSmallScreen = true;
        else
          this.isSmallScreen = false;    
      });  
  }

  menuItemClick(args: MouseEvent, item: MatMenuItem) {
    if (this.tabs) {
      
      let index = (item as any)._elementRef.nativeElement.dataset.index;
      
      if (index != this.selectedIndex) {
        this.selectedIndex = index;
      }
        
    }
  }  

}
