import { Injectable } from '@angular/core';
import { Item } from './Item.dto';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor () { }

  public generateItems(count: number = 1): Item[] {
    const items: Item[] = [];
    for (let i = 0; i < count; i++) {
      items.push(Item.buildRandom(i + 1));
    }
    return items;
  }

  sortItemsByName(isAsc: boolean, items: Item[]): Item[] {
    items.sort((a: Item, b: Item): number => {
      if (a.name < b.name) {
        return isAsc ? -1 : 1;
      }
      if (a.name > b.name) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
    return items;
  }
}
