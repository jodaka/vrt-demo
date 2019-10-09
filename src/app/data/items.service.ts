import { Injectable } from '@angular/core';
import { Item } from './Item.dto';
import { getRandomInt } from 'src/app/utilities/randomNumber';

// generated here http://listofrandomnames.com/
const dummyNames = [
  'Tawny', 'Evita', 'Anisa', 'Malisa', 'Petra', 'Lillia', 'Aline', 'Etha', 'Bethany',
  'Arla', 'Abigail', 'Christina', 'Patience', 'Clementina', 'Particia', 'Idalia', 'Floretta',
  'Zola', 'Lashawna', 'Deb', 'Ramonita', 'Rana', 'Marguerite', 'Mazie', 'Thelma', 'Claudie',
  'Bernadine', 'Rayna', 'Brittanie', 'Sherryl', 'Hillary', 'Latashia', 'Mana', 'Jeanne', 'Marx',
  'Ji', 'Faith', 'Kathryne', 'Lawana', 'Larita', 'Lurline', 'Lila', 'Zelda', 'Corrinne', 'Maribeth',
  'Kerrie', 'Florine', 'Goldie', 'Victoria', 'Cassey', 'Marquis', 'Bob', 'Wendell', 'Hilario',
  'Porfirio', 'Woodrow', 'Billy', 'Boyce', 'Tyron', 'Malcom', 'Doug', 'Evan', 'Jonas', 'Ward',
  'Rudy', 'Bert', 'Nathaniel', 'Rosendo', 'Emmitt', 'Lionel', 'Oliver', 'Neal', 'Clifford', 'Eduardo',
  'Marion', 'Alexander', 'Guillermo', 'Raphael', 'Wade', 'Rick', 'Merrill', 'Milford', 'Art', 'Morgan',
  'Ty', 'Mose', 'Shaun', 'Martin', 'Bernie', 'Darwin', 'Rashad', 'Israel', 'Johnson', 'Jamel', 'Phil',
  'Gregorio', 'Patricia', 'Gary', 'Carlo', 'Andreas'
];

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor () { }

  public generateItems(count: number = 1): Item[] {
    const items: Item[] = [];
    for (let i = 0; i < count; i++) {
      const name = dummyNames[ getRandomInt(0, dummyNames.length - 1) ];
      items.push(Item.buildRandom(name));
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
