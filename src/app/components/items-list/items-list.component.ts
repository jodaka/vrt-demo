import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'vrt-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsListComponent {
  @Input() items: Item[] = [];
  @Output() onItemSelected: EventEmitter<Item> = new EventEmitter();
  @Output() onDragNDrop:  EventEmitter<CdkDragDrop<string[]>> = new EventEmitter();

  public isSelectedItem: boolean;

  constructor () { }

  selectItem(item: Item): void {
    this.onItemSelected.emit(item);
  }

  onItemDrop(event: CdkDragDrop<string[]>): void {
    this.onDragNDrop.emit(event);
  }
}
