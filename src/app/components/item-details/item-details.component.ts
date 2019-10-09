import { Component, ViewEncapsulation, Input } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';

@Component({
  selector: 'vrt-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent {
  @Input() item: Item = null;
}
