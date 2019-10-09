import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Item, Flag } from 'src/app/data/Item.dto';
import { ItemsService } from 'src/app/data/items.service';

const INITIAL_COLUMN_COUNT = 100;

@Component({
  selector: 'vrt-items-root',
  templateUrl: './items-root.component.html',
  styleUrls: ['./items-root.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ItemsRootComponent implements OnInit {

  public leftColumnItems: Item[] = [];
  public rightColumnItems: Item[] = [];

  public leftColumnFilteredItems: Item[] = [];
  public rightColumnFilteredItems: Item[] = [];

  public selectedItem: Item = null;
  public isSortByAsc: boolean = false;

  constructor (
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {

    this.leftColumnItems = this.itemsService.generateItems(INITIAL_COLUMN_COUNT);
    this.rightColumnItems = this.rightColumnFilteredItems = this.itemsService.generateItems(INITIAL_COLUMN_COUNT);

    this.changeSorting();
    this.onItemSelected(this.leftColumnItems[0]);
  }

  onFlagFilterChange(filterState: object): void {
    const activeFlags = Object.keys(filterState).filter((flag: string) => filterState[flag]);
    this.rightColumnFilteredItems = this.rightColumnItems.filter((item: Item) => {
      for (let i = 0; i < activeFlags.length; i++) {
        if (!item.flags.has(activeFlags[i] as Flag)) {
          return false;
        }
      }
      return true;
    });
  }

  changeSorting(): void {
    this.isSortByAsc = !this.isSortByAsc;
    this.leftColumnFilteredItems = this.itemsService.sortItemsByName(this.isSortByAsc, this.leftColumnItems);
  }

  onItemSelected(item: Item): void {
    if (this.selectedItem !== null) {
      this.selectedItem.isSelected = false;
    }

    item.isSelected = true;
    this.selectedItem = item;
  }
}
