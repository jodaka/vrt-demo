import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';

@Component({
  selector: 'vrt-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ListItemComponent {
  @Input() item: Item = null;

  constructor () { }

}
