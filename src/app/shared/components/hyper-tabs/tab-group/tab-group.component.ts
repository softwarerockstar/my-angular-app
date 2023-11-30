import { Component, ContentChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabItemComponent } from '../tab-item/tab-item.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';

@Component({
  selector: 'hyper-tabs-tab-group',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './tab-group.component.html',
  styleUrl: './tab-group.component.scss'
})
export class TabGroupComponent {
  @ContentChildren(TabItemComponent) tabs?: QueryList<TabItemComponent>;


}
