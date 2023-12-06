import { HyperTabGroupAccordianComponent } from './tab-group-accordian/tab-group-accordian.component';
import { HyperTabGroupButtonGridComponent } from './tab-group-button-grid/tab-group-button-grid.component';
import { HyperTabGroupDropDownComponent } from './tab-group-dropdown/tab-group-dropdown.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    TabItemComponent,
    HyperTabGroupButtonGridComponent,
    HyperTabGroupDropDownComponent,
    HyperTabGroupAccordianComponent
  ],
  exports: [
    TabItemComponent,
    HyperTabGroupButtonGridComponent,
    HyperTabGroupDropDownComponent,
    HyperTabGroupAccordianComponent
  ]
})
export class HyperTabsModule {}