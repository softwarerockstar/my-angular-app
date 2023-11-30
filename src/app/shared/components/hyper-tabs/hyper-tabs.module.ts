import {TabItemComponent} from './tab-item/tab-item.component';
import {TabGroupComponent} from './tab-group/tab-group.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    TabItemComponent,
    TabGroupComponent
  ],
  exports: [
    TabItemComponent,
    TabGroupComponent
  ]
})
export class HyperTabsModule {}