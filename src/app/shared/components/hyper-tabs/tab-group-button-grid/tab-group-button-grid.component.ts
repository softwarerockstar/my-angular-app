import { Component, ContentChildren, Input, OnInit, QueryList, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'hyper-tabs-tab-group-button-grid',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './tab-group-button-grid.component.html',
  styleUrl: './tab-group-button-grid.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class HyperTabGroupButtonGridComponent implements OnInit {
  @ContentChildren(TabItemComponent) tabs?: QueryList<TabItemComponent>;

  panelOpenState: boolean = false;

  @Input() responsiveLinkText?: string;
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

  buttonClick(args: MouseEvent, item: MatButton) {
    args.preventDefault();
    
    if (this.tabs) {      
      let index = (item as any)._elementRef.nativeElement.dataset.index;
      
      if (index != this.selectedIndex) {
        this.selectedIndex = index;
      }
        
    }
  }  

}
