import {TabItemComponent} from './tab-item/tab-item.component';
import { NgModule } from '@angular/core';
import { HyperTabGroupDropDownComponent } from './tab-group-dropdown/tab-group.component';


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