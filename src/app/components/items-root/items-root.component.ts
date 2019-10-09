import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Item } from 'src/app/data/Item.dto';
import { ItemsService } from 'src/app/data/items.service';

const INITIAL_COLUMN_COUNT = 100;

@Component({
  selector: 'vrt-items-root',
  templateUrl: './items-root.component.html',
  styleUrls: ['./items-root.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemsRootComponent implements OnInit {

  public leftColumn: Item[] = [];
  public rightColumn: Item[] = [];
  public selectedItem: Item = null;

  constructor (
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {

    this.leftColumn = this.itemsService.generateItems(INITIAL_COLUMN_COUNT);
    this.rightColumn = this.itemsService.generateItems(INITIAL_COLUMN_COUNT);
    this.onItemSelected(this.leftColumn[0]);
    console.log(111, this.selectedItem); // eslint-disable-line
  }

  onItemSelected(item: Item): void {
    if (this.selectedItem !== null) {
      this.selectedItem.isSelected = false;
    }

    item.isSelected = true;
    this.selectedItem = item;
  }
}
