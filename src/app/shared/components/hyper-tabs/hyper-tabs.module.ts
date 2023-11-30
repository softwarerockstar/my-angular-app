import { HyperTabGroupDropDownComponent } from './tab-group-dropdown/tab-group-dropdown';
import {TabItemComponent} from './tab-item/tab-item.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    TabItemComponent,
    HyperTabGroupDropDownComponent
  ],
  exports: [
    TabItemComponent,
    HyperTabGroupDropDownComponent
  ]
})
export class HyperTabsModule {}