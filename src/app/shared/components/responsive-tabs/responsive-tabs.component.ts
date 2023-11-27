import { Component, Input, OnInit } from '@angular/core';
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

  @Input() tabs: ResponsiveTabsModel[] = [
    { label: 'First', value: '0' },
    { label: 'Second', value: '1' },
    { label: 'Third', value: '2' },
    { label: 'Fourth', value: '3' },
    { label: 'Fifth', value: '4' }
  ];

  @Input() responsiveText: string = "Please click to see options";
  
    
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
    //const me = this;

    //console.log(event.tab.textLabel)
    
    console.log(this.tabs[event.index].value)

  }

  menuItemClick(args: MouseEvent, tab: MatMenuItem) {
    //console.log(args);
    console.log((tab as any)._elementRef.nativeElement.dataset.index);
    // console.log(dataset._elementRef.nativeElement.dataset.x);
  }
  
}
