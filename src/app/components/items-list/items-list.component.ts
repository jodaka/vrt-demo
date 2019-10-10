import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';

@Component({
  selector: 'vrt-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsListComponent {
  @Input() items: Item[] = [];
  @Output() onItemSelected: EventEmitter<Item> = new EventEmitter();

  public isSelectedItem: boolean;

  constructor () { }

  selectItem(item: Item): void {
    this.onItemSelected.emit(item);
  }

  trackByFn(index: number, item: Item): number {
    if (!item) {
      return null;
    }
    return index;
  }
}
