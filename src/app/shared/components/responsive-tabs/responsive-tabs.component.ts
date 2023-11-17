import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { MatTab, MatTabChangeEvent } from '@angular/material/tabs';
import { MatMenuItem } from '@angular/material/menu';

export interface ResponsiveTabsModel {
  label: string;
  value?: string;
}

@Component({
  selector: 'responsive-tabs',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './responsive-tabs.component.html',
  styleUrl: './responsive-tabs.component.scss'
})
export class ResponsiveTabsComponent implements OnInit {

  @Input() tabs: ResponsiveTabsModel[] = [
    { label: 'First', value: '0' },
    { label: 'Second', value: '1' },
    { label: 'Third', value: '2' },
    { label: 'Fourth', value: '3' },
    { label: 'Fifth', value: '4' }
  ];

  @Input() responsiveText: string = "Please click to see options";

  Breakpoints = Breakpoints;
  currentBreakpoint:string = '';
  
  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );
    
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
  }


  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.currentBreakpoint = Breakpoints.Large;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.currentBreakpoint = Breakpoints.Medium;
    } else if(this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.currentBreakpoint = Breakpoints.Small;
    } else if(this.breakpointObserver.isMatched('(min-width: 500px)')) {
      this.currentBreakpoint = '(min-width: 500px)';
    }
  }


  onTabChange (event: MatTabChangeEvent): void {
    //const me = this;

    console.log(event.tab.textLabel)
    //There I should get tab component reference

  }

  menuItemClick(args: MouseEvent, tab: MatMenuItem) {
    console.log(args);
    console.log((tab as any)._elementRef.nativeElement.dataset.x);
    // console.log(dataset._elementRef.nativeElement.dataset.x);
  }

  
}
