import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatMenuItem } from '@angular/material/menu';

export interface ResponsiveTabsModel {
  label: string;
  value?: string;
}

export enum ResponsiveTabsDisplayStyle {
  Menu,
  Tabs
}

@Component({
  selector: 'responsive-tabs',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './responsive-tabs.component.html',
  styleUrl: './responsive-tabs.component.scss'
})
export class ResponsiveTabsComponent implements OnInit {

  // A public property of enum type must be declared so that the view can reference it  
  public ResponsiveTabsDisplayStyle = ResponsiveTabsDisplayStyle;

  dispayStyle = ResponsiveTabsDisplayStyle.Tabs;
  currentTabIndex = 0;

  @Input() tabs?: ResponsiveTabsModel[];

  @Input() responsiveLinkText?: string;

  @Output() onClick = new EventEmitter<ResponsiveTabsModel>();
  
    
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {    

    this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.dispayStyle = ResponsiveTabsDisplayStyle.Menu;
      } else {
        this.dispayStyle = ResponsiveTabsDisplayStyle.Tabs;
      }
    });    
  }

  onTabChange (event: MatTabChangeEvent): void {
    if (this.tabs) {
      let index = event.index;
      this.raiseClickEvent(index);
    }

  }

  menuItemClick(args: MouseEvent, item: MatMenuItem) {
    if (this.tabs) {
      let index = (item as any)._elementRef.nativeElement.dataset.index;
      this.raiseClickEvent(index);
    }
  }  

  raiseClickEvent(index: number) {    
    if (this.tabs && this.onClick && index != this.currentTabIndex) {
      this.currentTabIndex = index;
      this.onClick.emit(this.tabs[index]);
    }
  }  
}
