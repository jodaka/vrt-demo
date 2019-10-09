import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';

@Component({
  selector: 'vrt-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ItemDetailsComponent implements OnInit, OnChanges {

  @Input() item: Item = null;
  constructor () { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any): void {
    console.log(11111, changes); // eslint-disable-line
  }
}
