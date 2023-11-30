import { HyperTabGroupAccordianComponent } from './tab-group-accordian/tab-group-accordian.component';
import { HyperTabGroupDropDownComponent } from './tab-group-dropdown/tab-group-dropdown.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    TabItemComponent,
    HyperTabGroupDropDownComponent,
    HyperTabGroupAccordianComponent
  ],
  exports: [
    TabItemComponent,
    HyperTabGroupDropDownComponent,
    HyperTabGroupAccordianComponent
  ]
})
export class HyperTabsModule {}